import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Maker
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4">
              下一代 AI 创作平台
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们正在构建一个革命性的 AI 创作工具，让每个人都能轻松创建令人惊叹的内容。
              加入我们的等待列表，成为第一批体验者！
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">快速创作</h3>
              <p className="text-gray-600">几秒钟内生成高质量内容</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">智能编辑</h3>
              <p className="text-gray-600">AI 驱动的智能编辑工具</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">安全可靠</h3>
              <p className="text-gray-600">企业级安全保障</p>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              加入等待列表
            </h2>
            <p className="text-gray-600 mb-6">
              输入您的邮箱，我们会在产品发布时第一时间通知您
            </p>
            <WaitlistForm />
          </div>

          {/* Footer */}
          <div className="mt-16 text-gray-500">
            <p>© 2024 AI Maker. 保留所有权利。</p>
          </div>
        </div>
      </div>
    </main>
  )
}
