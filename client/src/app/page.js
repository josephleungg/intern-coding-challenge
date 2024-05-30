'use client';
import { useState } from 'react';

export default function Home() {
  const [country, setCountry] = useState('');
  const [formErrorMsgs, setFormErrorMsgs] = useState({});

  // handling the country change
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // grabbing the form data
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    // contains form error messages
    const formErrors = {};

    // checking if first name length is less than 255 characters
    if(formValues.fname.length > 255) {
      formErrors.fname = 'First name must be less than 255 characters';
    }

    // checking if last name length is less than 255 characters
    if(formValues.lname.length > 255) {
      formErrors.lname = 'Last name must be less than 255 characters';
    }

    // checking if the phone number follows correct format
    // phone number regex formats to check
    const numberRegexOne = /^[1-9]\d{9}$/; // 4161234567
    const numberRegexTwo = /^\([1-9]\d{2}\)\s\d{3}-\d{4}$/; // (416) 123-4567
    const numberRegexThree = /^[1-9]\d{2}\s\d{3}\s\d{4}$/; // 416 123 4567
    const numberRegexFour = /^[1-9]\d{2}-\d{3}-\d{4}$/; // 416-123-4567

    if(!numberRegexOne.test(formValues.phone) && !numberRegexTwo.test(formValues.phone) && !numberRegexThree.test(formValues.phone) && !numberRegexFour.test(formValues.phone)) {
      formErrors.phone = 'Phone number is invalid format\nValid formats: 4161234567, (416) 123-4567, 416 123 4567, 416-123-4567';
    }

    // checking if address is less than 255 characters
    if(formValues.address.length > 255) {
      formErrors.address = 'Address must be less than 255 characters';
    }

    // checking if city is less than 255 characters
    if(formValues.city.length > 255) {
      formErrors.city = 'City must be less than 255 characters';
    }
    
    // checking if the form is valid to submit or sending the form errors to the user
    if(Object.keys(formErrors).length == 0){
      setFormErrorMsgs(formErrors);
      window.location.href = '/success';
    }else{
      // setting the form errors
      setFormErrorMsgs(formErrors);
    }

  };

  return (
    <main>
      <div className='form-div flex items-center justify-center h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center rounded-lg bg-sky-300 shadow-xl'>
          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' name='fname' required />

          {/* displaying error message when submitted */}
          {formErrorMsgs.fname && <p className='text-red-500'>{formErrorMsgs.fname}</p>} 

          <br />

          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' name='lname' required />

          {/* displaying error message when submitted */}
          {formErrorMsgs.lname && <p className='text-red-500'>{formErrorMsgs.lname}</p>}

          <br />

          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' required />

          <br />

          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' required />

          <br />

          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' id='phone' name='phone' required />
            
          {/* displaying error message when submitted */}
          {formErrorMsgs.phone && <p className='text-red-500'>{formErrorMsgs.phone}</p>}

          <br />

          <label htmlFor='address'>Address</label>
          <input type='text' id='address' name='address' required />

          {/* displaying error message when submitted */}
          {formErrorMsgs.address && <p className='text-red-500'>{formErrorMsgs.address}</p>}

          <br />

          <label htmlFor='city'>City</label>
          <input type='text' id='city' name='city' required />

          {/* displaying error message when submitted */}
          {formErrorMsgs.city && <p className='text-red-500'>{formErrorMsgs.city}</p>}

          <br />

          <label htmlFor='country'>Country</label>
          <select id='country' name='country' onChange={handleCountryChange} required>
            <option value=''>Select a country</option>
            <option value='canada'>Canada</option>
            <option value='usa'>USA</option>
          </select>

          <br />

          {/* changing to provinces if user selected Canada */}
          {country == 'canada' && (
            <select id='province' name='province' required>
              <option value=''>Select a province</option>
              <option value='alberta'>Alberta</option>
              <option value='british'>British Columbia</option>
              <option value='manitoba'>Manitoba</option>
              <option value='brunswick'>New Brunswick</option>
              <option value='newfoundland'>Newfoundland and Labrador</option>
              <option value='nova'>Nova Scotia</option>
              <option value='northwest'>Northwest Territories</option>
              <option value='nunavut'>Nunavut</option>
              <option value='ontario'>Ontario</option>
              <option value='prince'>Prince Edward Island</option>
              <option value='quebec'>Quebec</option>
              <option value='saskatchewan'>Saskatchewan</option>
              <option value='yukon'>Yukon</option>
            </select>
          )}

          {/* changing to states if user selected USA */}
          {country == 'usa' && (
            <select id='province' name='province' required>
              <option value=''>Select a state</option>
              <option value='alabama'>Alabama</option>
              <option value='alaska'>Alaska</option>
              <option value='arizona'>Arizona</option>
              <option value='arkansas'>Arkansas</option>
              <option value='california'>California</option>
              <option value='colorado'>Colorado</option>
              <option value='connecticut'>Connecticut</option>
              <option value='delaware'>Delaware</option>
              <option value='florida'>Florida</option>
              <option value='georgia'>Georgia</option>
              <option value='hawaii'>Hawaii</option>
              <option value='idaho'>Idaho</option>
              <option value='illinois'>Illinois</option>
              <option value='indiana'>Indiana</option>
              <option value='iowa'>Iowa</option>
              <option value='kansas'>Kansas</option>
              <option value='kentucky'>Kentucky</option>
              <option value='louisiana'>Louisiana</option>
              <option value='maine'>Maine</option>
              <option value='maryland'>Maryland</option>
              <option value='massachusetts'>Massachusetts</option>
              <option value='michigan'>Michigan</option>
              <option value='minnesota'>Minnesota</option>
              <option value='mississippi'>Mississippi</option>
              <option value='missouri'>Missouri</option>
              <option value='montana'>Montana</option>
              <option value='nebraska'>Nebraska</option>
              <option value='nevada'>Nevada</option>
              <option value='newhampshire'>New Hampshire</option>
              <option value='newjersey'>New Jersey</option>
              <option value='newmexico'>New Mexico</option>
              <option value='newyork'>New York</option>
              <option value='northcarolina'>North Carolina</option>
              <option value='northdakota'>North Dakota</option>
              <option value='ohio'>Ohio</option>
              <option value='oklahoma'>Oklahoma</option>
              <option value='oregon'>Oregon</option>
              <option value='pennsylvania'>Pennsylvania</option>
              <option value='rhodeisland'>Rhode Island</option>
              <option value='southcarolina'>South Carolina</option>
              <option value='southdakota'>South Dakota</option>
              <option value='tennessee'>Tennessee</option>
              <option value='texas'>Texas</option>
              <option value='utah'>Utah</option>
              <option value='vermont'>Vermont</option>
              <option value='virginia'>Virginia</option>
              <option value='washington'>Washington</option>
              <option value='westvirginia'>West Virginia</option>
              <option value='wisconsin'>Wisconsin</option>
              <option value='wyoming'>Wyoming</option>
            </select>
          )}

          <br />

          <button type='submit' className='rounded-md bg-green-500 p-2 shadow-md'>Submit</button>

        </form>
      </div>
    </main>
  );
}