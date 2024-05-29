export default function Home() {
  return (
    <main>
      <div className='form-div flex items-center justify-center'>
        <form className='flex flex-col items-center justify-center rounded-lg bg-sky-300 shadow-xl'>
          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' name='fname' required />

          <br />

          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' name='lname' required />

          <br />

          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' required />

          <br />

          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' required />

          <br />

          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' id='phone' name='phone' required />

          <br />

          <label htmlFor='address'>Address</label>
          <input type='text' id='address' name='address' required />

          <br />

          <label htmlFor='city'>City</label>
          <input type='text' id='city' name='city' required />

          <br />

          <label htmlFor='country'>Country</label>
          <select id='country' name='country' required>
            <option value=''>Select a country</option>
            <option value='canada'>Canada</option>
            <option value='usa'>USA</option>
          </select>

          {/* <label htmlFor='province'>Province</label>
          <select id='province' name='province' required>
            <option value=''>Select a province</option>
          </select> */}

        </form>
      </div>
    </main>
  );
}