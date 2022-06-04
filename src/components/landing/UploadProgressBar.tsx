/* This example requires Tailwind CSS v2.0+ */
export default function UploadProgressBar() {
  return (
    <div className="">
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-gray-900">Hệ thống đang xử lý...</p>
      <div className="mt-6" aria-hidden="true">
        <div className="bg-gray-200 rounded-full overflow-hidden">
          <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '50%' }} />
        </div>
        <div className="hidden sm:grid grid-cols-3 text-sm font-medium text-gray-600 mt-6">
          <div className="text-indigo-600">Upload File</div>
          <div className="text-center text-indigo-600">Xử lý AI</div>
          {/* <div className="text-center">Compiling assets</div> */}
          <div className="text-right">Tải kết quả</div>
        </div>
      </div>
    </div>
  )
}
