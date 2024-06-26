import { useState } from 'react'
import Image from "next/legacy/image"

import portrait from '../public/assets/portrait.jpg'
import Popup from '../utils/Popup.js'

export default function Card () {
  let [open, setOpen] = useState(false)

  return (
    <div className='border-box'>
      <div className='container'>
        <span className='test'>
          <span className='imageStyle'>
            <Image
              alt='Professional portrait of Bray'
              src={portrait}
              // layout='fill'
              // objectFit='cover'
              objectPosition='top'
              placeholder='blur'
              priority='true'
            />
          </span>
        </span>
        {/* todo: should change this to a transition */}
        {!open && (
          <div className='header'>
            <h1 className='head1'>Bray Polkinghorne</h1>
            <div className='jobtitle'>
              <h3 className='head3'>Maven Wave: </h3>
              <h4 className='head4'>DevOps Consultant</h4>
            </div>
            <span>
              <a className='link' href='https://bray.dev'>
                bray.dev
              </a>
            </span>
          </div>
        )}
        <a className='download' href='/assets/contact.vcf' download>
          <div className='contact'>
            <svg
              width='40'
              height='40'
              fillRule='evenodd'
              strokeLinejoin='round'
              strokeMiterlimit='1.414'
              clipRule='evenodd'
              viewBox='0 0 96 96'
            >
              <path
                fillRule='nonzero'
                d='M70.834,3C82.425,3.111 92.886,13.159 93,25.166C93.049,40.437 93.143,55.708 92.998,70.977C92.816,82.459 82.841,92.886 70.834,93C55.563,93.049 40.292,93.143 25.023,92.998C13.543,92.816 3.115,82.841 3,70.834C2.952,55.563 2.857,40.292 3.002,25.023C3.184,13.541 13.159,3.115 25.166,3C40.389,2.952 55.611,2.952 70.834,3ZM25.315,9C16.855,9.027 9.085,16.286 9,25.204C8.952,40.437 8.856,55.67 9.001,70.901C9.134,79.284 16.416,86.916 25.204,87C40.437,87.049 55.67,87.143 70.901,86.999C79.289,86.865 86.916,79.584 87,70.796C87.049,55.563 87.143,40.33 86.999,25.099C86.865,16.712 79.595,9.084 70.796,9C55.636,8.952 40.475,9 25.315,9Z'
                fill='#918E9B'
              />
              <path
                fillRule='nonzero'
                d='M48.249 15.415C59.178 15.622 68.671 26.285 67.113 37.408 65.838 46.504 57.241 54.013 48 54.013 36.881 54.013 26.945 42.8 29.002 31.301 30.558 22.599 38.598 15.589 47.751 15.415 48 15.413 48 15.413 48.249 15.415zM47.828 21.414C39.039 21.581 31.897 31.942 36.011 40.474 39.616 47.953 50.952 50.271 57.173 44.339 64.445 37.406 60.6 21.651 48.172 21.414 48 21.413 48 21.413 47.828 21.414zM48.298 58.014C60.127 58.177 71.525 65.212 76.794 76.046 77.903 78.326 75.659 81.393 73.097 80.375 71.196 79.619 70.68 77.118 69.461 75.34 62.102 64.604 46.158 60.832 34.704 67.67 30.298 70.3 26.725 74.255 24.498 78.887 24.498 78.887 23.476 80.51 21.938 80.584 19.586 80.696 18.093 78.102 19.714 75.047 25.15 64.797 36.377 57.96 48.298 58.014z'
                fill='#918E9B'
              />
            </svg>
            Download Contact
          </div>
        </a>
        <div className='connect'>
          <Popup />
        </div>
        <div className='footer'>
          <a href='https://www.linkedin.com/in/braypolk/' target='_blank' rel="noopener noreferrer">
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fillRule='evenodd'
              clipRule='evenodd'
              imageRendering='optimizeQuality'
              shapeRendering='geometricPrecision'
              textRendering='geometricPrecision'
              viewBox='0 0 201 201'
            >
              <rect width='201' height='201' fill='#918E9B' rx='19' ry='19' />
              <path d='M39 102v60h29V80H39zM54 39c-8 0-15 7-15 15 0 7 7 14 15 14 7 0 14-7 14-14 0-8-7-15-14-15zm107 66c-2-15-9-25-30-25-12 0-20 5-24 11V80H84v82h24v-41c0-10 2-21 15-21s14 13 14 22v40h25v-45c0-4 0-8-1-12z' />
            </svg>
          </a>

          <a href='https://github.com/Braypolk' target='_blank' rel="noopener noreferrer">
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              viewBox='0 0 26 26'
              fill='none'
            >
              <path
                d='M22.8224 0.500061H3.17955C1.70075 0.500061 0.500977 1.69984 0.500977 3.17863V22.8215C0.500977 24.3003 1.70075 25.5001 3.17955 25.5001H22.8224C24.3012 25.5001 25.501 24.3003 25.501 22.8215V3.17863C25.501 1.69984 24.3012 0.500061 22.8224 0.500061ZM15.9753 21.9119C15.5066 21.9956 15.3336 21.7054 15.3336 21.4655C15.3336 21.1641 15.3447 19.6239 15.3447 18.3795C15.3447 17.509 15.0545 16.9565 14.7141 16.6664C16.7789 16.4376 18.9552 16.153 18.9552 12.5871C18.9552 11.5715 18.5925 11.0637 18.001 10.4108C18.0958 10.1708 18.4139 9.1831 17.9061 7.89962C17.1304 7.65966 15.3559 8.8985 15.3559 8.8985C14.6193 8.69203 13.8213 8.586 13.0345 8.586C12.2476 8.586 11.4496 8.69203 10.713 8.8985C10.713 8.8985 8.93848 7.65966 8.16281 7.89962C7.65499 9.17752 7.96749 10.1652 8.06794 10.4108C7.47642 11.0637 7.19741 11.5715 7.19741 12.5871C7.19741 16.1362 9.27888 16.4376 11.3436 16.6664C11.0758 16.9063 10.8358 17.3193 10.7521 17.9108C10.222 18.1507 8.86593 18.5637 8.05678 17.1351C7.54897 16.2534 6.63379 16.1809 6.63379 16.1809C5.72977 16.1697 6.57241 16.7501 6.57241 16.7501C7.17508 17.0291 7.59919 18.1005 7.59919 18.1005C8.14049 19.7579 10.7298 19.1998 10.7298 19.1998C10.7298 19.9755 10.7409 21.2367 10.7409 21.4655C10.7409 21.7054 10.5735 21.9956 10.0992 21.9119C6.41616 20.6786 3.83803 17.1742 3.83803 13.0782C3.83803 7.95542 7.75544 4.06591 12.8782 4.06591C18.001 4.06591 22.1528 7.95542 22.1528 13.0782C22.1583 17.1742 19.6583 20.6842 15.9753 21.9119ZM10.501 18.5023C10.3949 18.5246 10.2945 18.48 10.2833 18.4074C10.2722 18.3237 10.3447 18.2512 10.4508 18.2289C10.5568 18.2177 10.6572 18.2623 10.6684 18.3349C10.6851 18.4074 10.6126 18.48 10.501 18.5023ZM9.97084 18.4521C9.97084 18.5246 9.88714 18.586 9.77553 18.586C9.65276 18.5972 9.56906 18.5358 9.56906 18.4521C9.56906 18.3795 9.65276 18.3181 9.76437 18.3181C9.8704 18.307 9.97084 18.3684 9.97084 18.4521ZM9.20633 18.3907C9.18401 18.4632 9.0724 18.4967 8.97754 18.4632C8.87151 18.4409 8.79897 18.3572 8.82129 18.2847C8.84361 18.2121 8.95522 18.1786 9.05008 18.201C9.16169 18.2344 9.23424 18.3181 9.20633 18.3907ZM8.51995 18.0893C8.46973 18.1507 8.3637 18.1396 8.27999 18.0559C8.19629 17.9833 8.17397 17.8773 8.22977 17.8271C8.27999 17.7657 8.38602 17.7768 8.46973 17.8606C8.54227 17.9331 8.57017 18.0447 8.51995 18.0893ZM8.01214 17.5815C7.96192 17.615 7.86705 17.5815 7.80566 17.4978C7.74428 17.4141 7.74428 17.3193 7.80566 17.2802C7.86705 17.23 7.96192 17.269 8.01214 17.3527C8.07352 17.4364 8.07352 17.5369 8.01214 17.5815ZM7.64942 17.0402C7.59919 17.0905 7.51549 17.0626 7.4541 17.0068C7.39272 16.9342 7.38156 16.8505 7.43178 16.8114C7.482 16.7612 7.56571 16.7891 7.62709 16.8449C7.68848 16.9175 7.69964 17.0012 7.64942 17.0402ZM7.27553 16.6273C7.25321 16.6775 7.18066 16.6887 7.11928 16.6496C7.04674 16.6161 7.01325 16.5547 7.03557 16.5045C7.0579 16.471 7.11928 16.4543 7.19183 16.4822C7.26437 16.5213 7.29785 16.5827 7.27553 16.6273Z'
                fill='#918E9B'
              />
            </svg>
          </a>

          <a href='https://www.instagram.com/braypolk/' target='_blank' rel="noopener noreferrer">
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              viewBox='0 0 25 25'
              fill='none'
            >
              <path
                d='M12.5 9.52344C11.9113 9.52366 11.336 9.69842 10.8466 10.0256C10.3573 10.3528 9.97593 10.8178 9.75081 11.3617C9.52569 11.9056 9.46691 12.5041 9.58188 13.0814C9.69686 13.6587 9.98044 14.189 10.3968 14.6051C10.8131 15.0213 11.3435 15.3047 11.9208 15.4195C12.4982 15.5342 13.0966 15.4752 13.6405 15.2499C14.1843 15.0246 14.6491 14.643 14.9761 14.1536C15.3031 13.6641 15.4777 13.0887 15.4777 12.5C15.4771 11.7106 15.1631 10.9536 14.6048 10.3955C14.0465 9.83739 13.2894 9.52373 12.5 9.52344ZM19.4593 7.23549C19.3077 6.85148 19.0789 6.50269 18.787 6.21077C18.4951 5.91886 18.1463 5.69004 17.7623 5.5385C16.5904 5.07589 13.8002 5.17969 12.5 5.17969C11.1998 5.17969 8.41239 5.07199 7.23717 5.5385C6.85315 5.69004 6.50436 5.91886 6.21245 6.21077C5.92053 6.50269 5.69171 6.85148 5.54018 7.23549C5.07812 8.40737 5.18136 11.2003 5.18136 12.4994C5.18136 13.7986 5.07813 16.5882 5.54241 17.764C5.69394 18.148 5.92276 18.4968 6.21468 18.7887C6.5066 19.0806 6.85538 19.3094 7.2394 19.4609C8.41127 19.9235 11.2015 19.8198 12.5022 19.8198C13.803 19.8198 16.5893 19.9275 17.7645 19.4609C18.1485 19.3094 18.4973 19.0806 18.7892 18.7887C19.0811 18.4968 19.31 18.148 19.4615 17.764C19.9275 16.5921 19.8203 13.7991 19.8203 12.5C19.8203 11.2009 19.9275 8.41183 19.4615 7.23605L19.4593 7.23549ZM12.5 17.0759C11.595 17.0759 10.7103 16.8075 9.95777 16.3047C9.20527 15.8019 8.61877 15.0873 8.27243 14.2511C7.92609 13.415 7.83547 12.4949 8.01203 11.6073C8.18859 10.7197 8.62441 9.90431 9.26436 9.26436C9.90431 8.62441 10.7197 8.18859 11.6073 8.01203C12.4949 7.83547 13.415 7.92609 14.2511 8.27243C15.0873 8.61877 15.8019 9.20527 16.3047 9.95777C16.8075 10.7103 17.0759 11.595 17.0759 12.5C17.0766 13.1011 16.9588 13.6965 16.7291 14.252C16.4994 14.8075 16.1623 15.3122 15.7373 15.7373C15.3122 16.1623 14.8075 16.4994 14.252 16.7291C13.6965 16.9588 13.1011 17.0766 12.5 17.0759ZM17.2645 8.80022C17.0532 8.80033 16.8467 8.73779 16.671 8.62049C16.4952 8.5032 16.3583 8.33642 16.2773 8.14127C16.1964 7.94611 16.1752 7.73134 16.2163 7.52411C16.2575 7.31689 16.3592 7.12652 16.5085 6.97709C16.6579 6.82766 16.8482 6.72588 17.0554 6.68463C17.2626 6.64337 17.4774 6.66449 17.6726 6.74531C17.8678 6.82614 18.0346 6.96304 18.152 7.13869C18.2694 7.31435 18.332 7.52087 18.332 7.73214C18.3326 7.87244 18.3055 8.01147 18.2522 8.14127C18.199 8.27106 18.1206 8.38906 18.0216 8.4885C17.9227 8.58794 17.805 8.66686 17.6755 8.72074C17.5459 8.77461 17.407 8.80238 17.2667 8.80246L17.2645 8.80022ZM22.3214 0H2.67857C1.96817 0 1.28686 0.282206 0.784535 0.784536C0.282206 1.28687 0 1.96817 0 2.67857L0 22.3214C0 23.0318 0.282206 23.7131 0.784535 24.2155C1.28686 24.7178 1.96817 25 2.67857 25H22.3214C23.0318 25 23.7131 24.7178 24.2155 24.2155C24.7178 23.7131 25 23.0318 25 22.3214V2.67857C25 1.96817 24.7178 1.28687 24.2155 0.784536C23.7131 0.282206 23.0318 0 22.3214 0ZM21.3661 16.183C21.2941 17.6133 20.9676 18.8806 19.9235 19.9219C18.8795 20.9632 17.6133 21.2963 16.1847 21.3644C14.7109 21.4475 10.2924 21.4475 8.81864 21.3644C7.38839 21.2924 6.12556 20.9654 5.0798 19.9219C4.03404 18.8783 3.70536 17.6105 3.63728 16.183C3.55413 14.7087 3.55413 10.2896 3.63728 8.81697C3.70926 7.38672 4.03181 6.11942 5.0798 5.07813C6.12779 4.03683 7.39397 3.70759 8.81864 3.63951C10.2924 3.55636 14.7109 3.55636 16.1847 3.63951C17.615 3.7115 18.8817 4.0385 19.9235 5.08203C20.9654 6.12556 21.298 7.39342 21.3661 8.82366C21.4492 10.2924 21.4492 14.7076 21.3661 16.183Z'
                fill='#918E9B'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
