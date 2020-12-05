import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <>
        <div className='relative bg-gray-600'>
          <div className='max-w-screen-xl mx-auto py-8 px-4 lg:py-8'>
            <div className=''>
              <div className='text-xl mb-4 leading-6 font-semibold uppercase tracking-wider text-gray-300'>
                Have questions about Steedos??
              </div>
              <div className='my-6 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10'>
                Contact Steedos and our technical expert will answer your
                questions.
              </div>
              <p className='mt-3 mb-0 text-lg leading-7 text-gray-300'>
                Our technical experts have more than 10 years of experience in
                management software development, and they are always ready to
                help you with any questions you may have about the
                functionality, pricing, implementation or any other aspect of
                Steedos.
              </p>
              {/* <div className="mt-3">
        <a href="/form/trial" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-blue-300 hover:bg-blue-400 hover:text-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            预约产品演示
        </a>
      </div> */}
            </div>
            {/* <div className="flex lg:flex-shrink-0">
      <img className="h-48 w-48 mt-4" src="/assets/contact_by_weixin.png"/>
    </div> */}
            <div className='grid grid-cols-1 gap-2 mt-3'>
              <a
                href='https://join.slack.com/t/steedos/shared_invite/zt-jq7eupr9-cgKrUOyWb1zymniRzhH4jg'
                target='_blank'
              >
                Join me on Slack — it’s a faster, simpler way to work.
              </a>
              {/* <a
                href='https://stackoverflow.com/questions/tagged/steedos'
                target='_blank'
              >
                Stack Overflow
              </a>
              <a href='https://discordapp.com/invite/steedos' target='_blank'>
                Discord
              </a>
              <a href='https://twitter.com/steedos' target='_blank'>
                Twitter
              </a> */}
            </div>
          </div>
        </div>

        <div className='bg-white'>
          <div className='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
            <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
              <div className='xl:col-span-1'>
                <img className='h-10' src='/img/logo.png' alt='Steedos' />
                <p className='mt-8 text-gray-500 text-base leading-6'>
                  Steedos is a new generation of low code platform, based on
                  business intelligence and model driven, it can easily and
                  easily create intelligent, mobile and personalized
                  applications according to the needs of business departments.
                </p>
              </div>
              <div class='mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2'>
                <div class='md:grid md:grid-cols-2 md:gap-8'>
                  <div>
                    <h4 className='text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase'>
                      Getting Started
                    </h4>
                    <ul className='mt-4'>
                      <li>
                        <a
                          href='/docs/overview'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Overview
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/installation'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Installation
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='mt-12 md:mt-0'>
                    <h4 className='text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase'>
                      Metadata
                    </h4>
                    <ul className='mt-4'>
                      <li className='mt-4'>
                        <a
                          href='/docs/metadata/metadata'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Overview
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/metadata/object/summary'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Object
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/metadata/object/field'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Field
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/metadata/object/listview'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          ListView
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/metadata/application'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Application
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/metadata/report'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Report
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/metadata/permission_set'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Permission Set
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/metadata/profile'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Profile
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='md:grid md:grid-cols-2 md:gap-8'>
                  <div>
                    <h4 className='text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase'>
                      Calculate With Formulas
                    </h4>
                    <ul className='mt-4'>
                      <li>
                        <a
                          href='/docs/formula/summary'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Overview
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/formula/create'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Build a Formula Field
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/formula/summary_field'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Roll-Up Summary Field
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/formula/date'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Date, DateTime, and Time Values
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/formula/best_practices'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Formula Best Practices
                        </a>
                      </li>
                      <li className='mt-4'>
                        <a
                          href='/docs/formula/examples'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Examples
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='mt-12 md:mt-0'>
                    <h4 className='text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase'>
                      Steedos API
                    </h4>
                    <ul className='mt-4'>
                      <li>
                        <a
                          href='/docs/api'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href='/docs/api/graphql'
                          className='text-base leading-6 text-gray-500 hover:text-gray-900'
                        >
                          GraphQL
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 border-t border-gray-200 pt-8'>
              <p className='text-base leading-6 text-gray-500 xl:text-center'>
                Copyright © 2020 Steedos, Inc.
              </p>

              <nav
                class='-mx-5 -my-2 flex flex-wrap justify-center'
                aria-label='Footer'
              >
                <div class='px-3 py-2'>
                  <a
                    href='https://www.steedos.com/cn/'
                    class='text-base text-gray-500 hover:text-gray-900'
                  >
                    中文
                  </a>
                </div>
                <div class='px-3 py-2'>
                  <a
                    href='https://www.steedos.org/'
                    class='text-base text-gray-500 hover:text-gray-900'
                  >
                    English
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Footer
