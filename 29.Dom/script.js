const header=document.createElement("header")
const navbar=document.createElement("nav")
const ulElement=document.createElement("ul")
const home=document.createElement("li")
const about=document.createElement("li")
const blog=document.createElement("li")
const contact=document.createElement("li")
const section1=document.createElement("section")
const section2=document.createElement("section")
const section3=document.createElement("section")
const section4=document.createElement("section")

document.body.append(header)
document.body.append(section1)
document.body.append(section2)
document.body.append(section3)
document.body.append(section4 )

header.append(navbar)
navbar.append(ulElement)
ulElement.append(home)
ulElement.append(about)
ulElement.append(blog)
ulElement.append(contact)

section1.append('Home')
section2.append('About')
section3.append('Blog')
section4.append('Contact')

section1.id='sec1'
section2.id='sec2'
section3.id='sec3'
section4.id='sec4'

ulElement.style.height="10vh"
ulElement.style.display="flex"
ulElement.style.justifyContent="space-around"
ulElement.style.alignItems="center"
ulElement.style.backgroundColor="#000"

home.innerHTML="<strong>Home</strong>"
about.innerHTML="<strong>About</strong>"
blog.innerHTML="<strong>Blog</strong>"
contact.innerHTML="<strong>Contact</strong>"

home.style.color='#fff'
home.style.listStyle='none'
home.style.cursor='pointer'
about.style.color='#fff'
about.style.listStyle='none'
about.style.cursor='pointer'
blog.style.color='#fff'
blog.style.listStyle='none'
blog.style.cursor='pointer'
contact.style.color='#fff'
contact.style.listStyle='none'
contact.style.cursor='pointer'


section1.style.height="100vh"
section1.style.display="flex"
section1.style.alignItems="center"
section1.style.justifyContent="center"
section1.style.fontSize="20px"
section1.style.fontWeight="bolder"
section1.style.border="1px dashed #000"

section2.style.height="100vh"
section2.style.display="flex"
section2.style.alignItems="center"
section2.style.justifyContent="center"
section2.style.fontSize="20px"
section2.style.fontWeight="bolder"
section2.style.border="1px dashed #000"

section3.style.height="100vh"
section3.style.display="flex"
section3.style.alignItems="center"
section3.style.justifyContent="center"
section3.style.fontSize="20px"
section3.style.fontWeight="bolder"
section3.style.border="1px dashed #000"

section4.style.height="100vh"
section4.style.display="flex"
section4.style.alignItems="center"
section4.style.justifyContent="center"
section4.style.fontSize="20px"
section4.style.fontWeight="bolder"
section4.style.border="1px dashed #000"



home.addEventListener('click',function(){
    window.location='#sec1'
 })
about.addEventListener('click',function(){
    window.location='#sec2'
 })
blog.addEventListener('click',function(){
    window.location='#sec3'
 })
contact.addEventListener('click',function(){
    window.location='#sec4'
 })