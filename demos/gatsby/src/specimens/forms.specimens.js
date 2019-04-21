import React from 'react'
import { Specimen } from '@penpad/core'

// export default {
//   'Brand palette': {
//     type: 'color',
//     colors: {
//       '$brand-a': '#8ef',
//       '$brand-b': '#138',
//       '$brand-c': '#dea'
//     }
//   },

export default () => (
  <>
    <Specimen id='Field' padding={16}>
      <div className='field'>
        <label className='label'>Label</label>
        <div className='control'>
          <input className='input' type='text' placeholder='Text input' />
        </div>
        <p className='help'>This is a help text</p>
      </div>
    </Specimen>

    <Specimen id='Control/input'>
      <div className='control'>
        <input className='input' type='text' placeholder='Text input' />
      </div>
    </Specimen>

    <Specimen id='Control/dropdown'>
      <div className='control'>
        <div className='select'>
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </Specimen>

    <Specimen id='Control/button'>
      <div className='control'>
        <button className='button is-primary'>Submit</button>
      </div>
    </Specimen>

    <Specimen id='Control/with icons' padding={16}>
      <>
        <div className='field'>
          <p className='control has-icons-left has-icons-right'>
            <input className='input' type='email' placeholder='Email' />
            <span className='icon is-small is-left'>
              <i className='fas fa-envelope' />
            </span>
            <span className='icon is-small is-right'>
              <i className='fas fa-check' />
            </span>
          </p>
        </div>
        <div className='field'>
          <p className='control has-icons-left'>
            <input className='input' type='password' placeholder='Password' />
            <span className='icon is-small is-left'>
              <i className='fas fa-lock' />
            </span>
          </p>
        </div>
        <div className='field'>
          <p className='control'>
            <button className='button is-success'>Login</button>
          </p>
        </div>
      </>
    </Specimen>

    <Specimen id='Form/horizontal form' padding={16}>
      <>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>From</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <p className='control is-expanded has-icons-left'>
                <input className='input' type='text' placeholder='Name' />
                <span className='icon is-small is-left'>
                  <i className='fas fa-user' />
                </span>
              </p>
            </div>
            <div className='field'>
              <p className='control is-expanded has-icons-left has-icons-right'>
                <input
                  className='input is-success'
                  type='email'
                  placeholder='Email'
                  value='alex@smith.com'
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-envelope' />
                </span>
                <span className='icon is-small is-right'>
                  <i className='fas fa-check' />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className='field is-horizontal'>
          <div className='field-label' />
          <div className='field-body'>
            <div className='field is-expanded'>
              <div className='field has-addons'>
                <p className='control'>
                  <a className='button is-static' href='/'>
                    +44
                  </a>
                </p>
                <p className='control is-expanded'>
                  <input
                    className='input'
                    type='tel'
                    placeholder='Your phone number'
                  />
                </p>
              </div>
              <p className='help'>Do not enter the first zero</p>
            </div>
          </div>
        </div>

        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Department</label>
          </div>
          <div className='field-body'>
            <div className='field is-narrow'>
              <div className='control'>
                <div className='select is-fullwidth'>
                  <select>
                    <option>Business development</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='field is-horizontal'>
          <div className='field-label'>
            <label className='label'>Already a member?</label>
          </div>
          <div className='field-body'>
            <div className='field is-narrow'>
              <div className='control'>
                <label className='radio'>
                  <input type='radio' name='member' />
                  Yes
                </label>
                <label className='radio'>
                  <input type='radio' name='member' />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Subject</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <input
                  className='input is-danger'
                  type='text'
                  placeholder='e.g. Partnership opportunity'
                />
              </div>
              <p className='help is-danger'>This field is required</p>
            </div>
          </div>
        </div>

        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Question</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <textarea
                  className='textarea'
                  placeholder='Explain how we can help you'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='field is-horizontal'>
          <div className='field-label' />
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <button className='button is-primary'>Send message</button>
              </div>
            </div>
          </div>
        </div>
      </>
    </Specimen>

    <Specimen id='Notification/danger' width={300} background='transparent'>
      <div className='notification is-danger'>
        <button className='delete' />
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum{' '}
        <a href='/'>felis venenatis</a> efficitur. Sit amet, consectetur
        adipiscing elit
      </div>
    </Specimen>

    <Specimen id='Notification/primary' width={300} background='transparent'>
      <div className='notification is-primary'>
        <button className='delete' />
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum{' '}
        <a href='/'>felis venenatis</a> efficitur. Sit amet, consectetur
        adipiscing elit
      </div>
    </Specimen>

    <Specimen id='Notification/info' width={300} background='transparent'>
      <div className='notification is-info'>
        <button className='delete' />
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
        fringilla. Nullam gravida purus diam, et dictum{' '}
        <a href='/'>felis venenatis</a> efficitur. Sit amet, consectetur
        adipiscing elit
      </div>
    </Specimen>
  </>
)
