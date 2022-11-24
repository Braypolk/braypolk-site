
async function handleFormSubmit (e, route) {
    e.preventDefault(e)
    document.getElementById('submit').textContent = 'Submitting'
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    fetch(`api/${route}`, {
      method: 'post',
      body: JSON.stringify(formData)
    }).then(res => {
      res.json().then(jsonRes => {
        // success, remove form and show a message
        if (res.status === 200) {
          console.log('success')
          var form = document.getElementById('form')
          form.reset()
          form.style.display = 'none'
          document.getElementById('submit').textContent = 'Submitted'
          document.getElementById('success').style.display = 'block'
        }
        // error, alert and keep form data
        else if (res.status === 422) {
          alert(`ERROR: ${jsonRes.message}\nPlease try again`)
          document.getElementById('submit').textContent = 'Submit'
        }
      })
    })
  }

export default handleFormSubmit;
