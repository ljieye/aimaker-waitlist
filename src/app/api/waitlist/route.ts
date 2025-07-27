import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    console.log('Received email:', email)

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      console.log('Invalid email format:', email)
      return NextResponse.json(
        { error: '请输入有效的邮箱地址' },
        { status: 400 }
      )
    }

    console.log('Checking for existing email...')
    
    // 检查邮箱是否已经存在
    const existingEntry = await prisma.waitlistEntry.findUnique({
      where: { email: email.toLowerCase() }
    })

    if (existingEntry) {
      console.log('Email already exists:', email)
      return NextResponse.json(
        { error: '该邮箱已经注册过了' },
        { status: 409 }
      )
    }

    console.log('Creating new waitlist entry...')

    // 创建新的 waitlist 条目
    const waitlistEntry = await prisma.waitlistEntry.create({
      data: {
        email: email.toLowerCase()
      }
    })

    console.log('Successfully created entry:', waitlistEntry.id)

    return NextResponse.json(
      { 
        message: '成功加入等待列表！',
        id: waitlistEntry.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Waitlist registration error:', error)
    
    // 更详细的错误信息
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    
    return NextResponse.json(
      { error: '服务器错误，请稍后重试' },
      { status: 500 }
    )
  }
} 