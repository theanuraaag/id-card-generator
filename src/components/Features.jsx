import React from 'react'

const Features = () => {
  return (
    <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">
          Why Choose Our Generator?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Upload Your Own Template</h3>
            <p className="text-gray-600">
              No restrictions! Upload any ID card design you want and customize it with ease.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Dynamic Fields</h3>
            <p className="text-gray-600">
              Add, edit, or remove fields like name, ID, branch, expiry date, and more — it's fully flexible.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">One-Click Download</h3>
            <p className="text-gray-600">
              Instantly download your ID card as an image or PDF without any watermark or signup required.
            </p>
          </div>
        </div>
      </section>
  )
}

export default Features