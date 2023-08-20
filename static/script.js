let select = document.getElementsByTagName("select")[0]
let btn = document.getElementById("btn")
let textArea = document.getElementsByTagName("textarea")[0]
let textArea2 = document.getElementsByTagName("textarea")[1]

let lang = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'catalan', 'cebuano', 'chichewa', 'chinese (simplified)', 'chinese (traditional)', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'odia', 'pashto', 'persian', 'polish', 'portuguese', 'punjabi', 'romanian', 'russian', 'samoan', 'scots gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uyghur', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu']

for(let x in lang){
   let option = document.createElement('option')
   option.value = lang[x]
   option.innerHTML = lang[x]
   select.appendChild(option)
}

btn.addEventListener('click', ()=>{
   if(select.value == "nothing"){
      alert("Please, select one language")
   }
   else if(textArea.value == ''){
      alert("Please enter the text")
   }
   else{
      option = {
         method: "POST",
         header: {
             "Content-Type": "Application/json"
         },
         body:JSON.stringify({
             "text": textArea.value,
             "language": select.value,
         })
     }
     async function data(){
         let response = await fetch('/', option)
         return response
     }
     data().then((response)=>{
         return response.json()
     })
     .then((res)=>{
         textArea2.value = res.result
     })
     .catch((err)=>{
         console.log(err)
     })
   }
})