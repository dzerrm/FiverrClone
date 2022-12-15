import { FacebookOutlined, GlobalOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="footer">
    <div className="container">
      <div className="row-footer">
        <ul>
          <h5>Categories</h5>
          <li>
            <a href="">Graphics & Desgin</a>
          </li>
          <li>
            <a href="">Digital Marketing</a>
          </li>
          <li>
            <a href="">Writing & Translation</a>
          </li>
          <li>
            <a href="">Video & Animation</a>
          </li>
          <li>
            <a href="">Programming & Tech</a>
          </li>
          <li>
            <a href="">Data</a>
          </li>
          <li>
            <a href="">Business</a>
          </li>
          <li>
            <a href="">Lifestyle</a>
          </li>
          <li>
            <a href="">Sitemap</a>
          </li>
        </ul>
        <ul>
          <h5>About</h5>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Press & News</a>
          </li>
          <li>
            <a href="">Partnerships</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms of Service</a>
          </li>
          <li>
            <a href="">Intellectual Property Claims</a>
          </li>
          <li>
            <a href="">Investor Relations</a>
          </li>
        </ul>
        <ul>
          <h5>Support</h5>
          <li>
            <a href="">Help & Support</a>
          </li>
          <li>
            <a href="">Trust & Safety</a>
          </li>
          <li>
            <a href="">Selling on Fiverr</a>
          </li>
          <li>
            <a href="">Buying on Fiverr</a>
          </li>
        </ul>
        <ul>
          <h5>Community</h5>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Forum</a>
          </li>
          <li>
            <a href="">Community Standards</a>
          </li>
          <li>
            <a href="">Podcast</a>
          </li>
          <li>
            <a href="">Affiliates</a>
          </li>
          <li>
            <a href="">Invite a Friend</a>
          </li>
          <li>
            <a href="">Become a Seller</a>
          </li>
        </ul>
        <ul>
          <h5>More From Fiverr</h5>
          <li>
            <a href="">Fiverr Business</a>
          </li>
          <li>
            <a href="">Fiverr Pro</a>
          </li>
          <li>
            <a href="">Fiverr Studios</a>
          </li>
          <li>
            <a href="">Fiverr Logo Maker</a>
          </li>
          <li>
            <a href="">Fiverr Guides</a>
          </li>
          <li>
            <a href="">Get Inspired</a>
          </li>
          <li>
            <a href="">Fiverr Select</a>
          </li>
          <li>
            <a href="">ClearVoice
            <p>Content Marketing</p>
            </a>
          </li>
          <li>
            <a href="">Fiverr Workspace
            <p>Invoice Software</p>
            </a>
          </li>
          <li>
            <a href="">Learn
            <p>Online Courses</p>
            </a>
          </li>

        </ul>
      </div>
      <hr />
      <div className="row-footer-bottom row ">
        <div className="col-12 col-md-6 d-flex ft-left align-items-center">
          <h4>Fiverr</h4>
          <span className='title-ft'>Fiverr intermational Ltd 2021</span>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-end ft-right align-items-center">
        <TwitterOutlined />
        <FacebookOutlined />
        <LinkedinOutlined />
        <InstagramOutlined />
        <span className='d-flex align-items-center'> <GlobalOutlined />
             <span className='mx-1'>English</span>
        </span>
        </div>
      </div>
    </div>
  </div>
  )
}