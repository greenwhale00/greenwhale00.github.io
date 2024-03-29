import React, { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
// import Sidebar from './Sidebar';
import data from './portfolioDATA';
import './reset.css';
import './main.scss';


const App = () => {
  const [num, setNum] = useState(1);
  const [con, setCon] = useState('cover');
  const [on, setOn] = useState(false);
  const ac = data.map(it => it.anchor);

  const Cover = () => {
    return (
      <div className={`cover ${on ? 'on' : ''}`}>
        <div className='inside'>
          <div className="upper">
            <figure className='dot'></figure>
          </div>

          <ul className='co_center'>

            {
              data.map((it, idx) => {
                return (
                  <li>
                    <a href={`#${it.anchor}`} onClick={
                      () => setOn(!on)
                    }>{it.title}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>

      </div>
    )
  }
  return (
    <div className='FP'>

      <Cover />
      {/* <header className='header'>
        2023 KHL portfolio {num} {con}
      </header> */}
      <button onClick={() => setOn(!on)} className={`cover_open ${on ? 'on' : ''}`}>
        <span>커버 나오는 버튼</span>
      </button>
      <nav className='gnb'>

        <ul>
          {
            ['cover', ...ac, 'copyright'].map((it, idx) => {
              return (
                <li className={num === (idx + 1) ? 'on' : ''}>
                  <a href={`#${it}`}>{it}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>


      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        anchors={['cover', ...ac, 'copyright']}
        afterLoad={(origin, destination) => {
          setNum(destination.index + 1);
          setCon(destination.anchor)
        }
        }

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
              <div className="section">
                <div className='inner'>
                  <p className='title'>Portfolio</p>
                  {/* <a href="#pf01">01</a> */}
                  {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button> */}
                </div>
              </div>
              {
                data.map(it => {
                  return (
                    <div className="section">

                      <div className='inner'>
                        <div className="inside">
                          <div className="upper">
                            <figure className='dot'></figure>
                          </div>
                          <p>{it.id}</p>
                        </div>


                        {
                          it.color?.map(color => <li style={{ background: color }}>{color}</li>)
                        }
                      </div>
                    </div>
                  )
                })
              }
              <div className="section">
                <p className='inner'>Footer</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>

  )
}

export default App