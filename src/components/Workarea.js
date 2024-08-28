import React from 'react'
import Value from '../assets/images/Value.png'
import ROI from '../assets/images/roi.png'
import Invested from '../assets/images/Invested.png'
import Lmge1 from '../assets/images/bitcoin.png'
import Socal from '../assets/images/socal.png'
import Anon from '../assets/images/anama.png'
import anam from '../assets/images/anam.png'
import anon from '../assets/images/anon.png'
import gr from '../assets/images/gr.png'

export default function Workarea() {
  return (
    <div className='main-container' >
       <h4 className='text-white mb-4 d-blovk d-lg-none'>
                        Welcome Back, Arkhan
        </h4>
      <div className='row'>
        <div className='col-xl-9 col-lg-8'>
          <div className='top-data mb-4'>
            
                <div className='state-value'>
                  <div className='icon'>
                  <img src={(Value)}></img>
                  </div>
                  <div className='valume'>
                    <p>Total Value</p>
                    <h1>$ 4,800</h1>
                  </div>
                </div>
             
             
              <div className='state-value'>
                  <div className='icon'>
                  <img src={(Invested)}></img>
                  </div>
                  <div className='valume'>
                    <p>Total Invested</p>
                    <h1>$ 4,000</h1>
                  </div>
                </div>
             
             
              <div className='state-value'>
                  <div className='icon'>
                  <img src={(ROI)}></img>
                  </div>
                  <div className='valume'>
                    <p>ROI</p>
                    <h1>+ 20%</h1>
                  </div>
                </div>
                
          </div>
          <div className='row'>
            <div className='col-sm-4 mb-4'>
              <div className='card cardcustom'>
                <div className='card-body p-0'>
                  <img className='w-100' src={(Anon)}></img>
                </div>
                <div className='card-footer'>
                    Test data by <span>Anon</span>
                </div>
              </div>
            </div>
            <div className='col-sm-4 mb-4'>
              <div className='card cardcustom'>
                <div className='card-body p-0'>
                  <img className='w-100' src={(anam)}></img>
                </div>
                <div className='card-footer'>
                    Test data by <span>Anon</span>
                </div>
              </div>
            </div>
            <div className='col-sm-4 mb-4'>
              <div className='card cardcustom'>
                <div className='card-body p-0'>
                  <img className='w-100' src={(anon)}></img>
                </div>
                <div className='card-footer'>
                    Test data by <span>Normie</span>
                </div>
              </div>
            </div>
            <div className='col-md-12 mb-4'>
              <div className='chartmain'>
                <h4 className='text-white mb-4'>Performance Graph</h4>
                <img className='w-100' src={(gr)}></img>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-4'>
          <div className='fundallocation mb-4'>
              <h4 className='fund_title'>Fund Allocation</h4>
              <div className='findlist'>
                <div className='fundimg'>
                  <div className='imge1'>
                    <img src={(Lmge1)}></img>
                  </div>
                  <div className='name'>
                    Bitcoin
                  </div>
                  <div className='amount ms-auto'>
                    $2,000
                  </div>
                </div>
                <div className='progressbar'>
                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width:'25%',}}></div>
                  </div> 
                  <span>71,68%</span>
                </div>
              </div>
              <div className='findlist'>
                <div className='fundimg'>
                  <div className='imge1'>
                    <img src={(Lmge1)}></img>
                  </div>
                  <div className='name'>
                    Bitcoin
                  </div>
                  <div className='amount ms-auto'>
                    $2,000
                  </div>
                </div>
                <div className='progressbar'>
                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width:'25%',}}></div>
                  </div> 
                  <span>71,68%</span>
                </div>
              </div>
              <div className='findlist'>
                <div className='fundimg'>
                  <div className='imge1'>
                    <img src={(Lmge1)}></img>
                  </div>
                  <div className='name'>
                    Bitcoin
                  </div>
                  <div className='amount ms-auto'>
                    $2,000
                  </div>
                </div>
                <div className='progressbar'>
                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width:'25%',}}></div>
                  </div> 
                  <span>71,68%</span>
                </div>
              </div>
              <div className='findlist'>
                <div className='fundimg'>
                  <div className='imge1'>
                    <img src={(Lmge1)}></img>
                  </div>
                  <div className='name'>
                    Bitcoin
                  </div>
                  <div className='amount ms-auto'>
                    $2,000
                  </div>
                </div>
                <div className='progressbar'>
                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width:'25%',}}></div>
                  </div> 
                  <span>71,68%</span>
                </div>
              </div>
              <div className='findlist'>
                <div className='fundimg'>
                  <div className='imge1'>
                    <img src={(Lmge1)}></img>
                  </div>
                  <div className='name'>
                    Bitcoin
                  </div>
                  <div className='amount ms-auto'>
                    $2,000
                  </div>
                </div>
                <div className='progressbar'>
                  <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width:'25%',}}></div>
                  </div> 
                  <span>71,68%</span>
                </div>
              </div>
              <button className='btn viewall w-100'>
                View All
              </button>
          </div>
          <div className='fundallocation mb-4 text-center'>
              <img className='img-gluid' src={(Socal)}></img>
              <h5 className='text-white mt-4' style={{fontSize:'16px',}}>Chat with community</h5>
              <p className='text-white mt-2 mb-3' style={{fontSize:'10px',}}>Chat with other like minded investors
              holding similar portfolios.</p>
              <button className='btn viewall w-100'>
                View All
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}
