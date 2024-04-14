import    './style.css'

  console.log('main')
  const addButton = document.getElementById('add-button')
  const addText = document.getElementById('add-text')
  const memoList = document.getElementById('memo-list')
  addText.focus()
 

  function addMemoDom(text) {
 
      const li = document.createElement('li')
      li.classList.add('flex')
      const p = document.createElement('p')

      const div = document.createElement('div')
      const deleteBtn = document.createElement('button')
      const editBtn = document.createElement('button')

      p.textContent = text
      deleteBtn.textContent = '삭제'
      editBtn.textContent = '수정'

      li.appendChild(p)
      li.appendChild(div)
      div.appendChild(editBtn)
      div.appendChild(deleteBtn)
      memoList.appendChild(li)

      deleteBtn.addEventListener('click', function () {

          li.parentNode.removeChild(li)
      })
   
      editBtn.addEventListener('click', function () {
          const editInput = document.createElement('input')
          editInput.type = 'text'
          editInput.value = p.textContent
          const saveBtn = document.createElement('button')
          saveBtn.textContent = '저장'
 
           deleteBtn.classList.add('hidden');
          li.replaceChild(editInput, p)
          div.replaceChild(saveBtn, editBtn)

          saveBtn.addEventListener('click', function () {
            
              editInput.replaceWith(p)
              p.textContent = editInput.value
              saveBtn.replaceWith(editBtn)
          })


      })
  }

  addButton.addEventListener('click', function () {
 
      const text = addText.value.trim()
      if (text) {
          addMemoDom(text)
 
          addText.value = ''
      }
  })

  
