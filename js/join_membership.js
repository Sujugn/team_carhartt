document.addEventListener('DOMContentLoaded', function () {

    const plusBtn = document.querySelector('.plus_btn')
    const plusBtn2 = document.querySelector('.plus_btn_02')
    const View = document.querySelector('.view')
    const View2 = document.querySelector('.view_02')
    const totalTerms = document.getElementById('total_terms')
    const termsEls = document.querySelectorAll('.terms_el')

    let isOpen = false
        
    plusBtn.addEventListener('click', function(){
        if(isOpen === false){
            View.style.display = 'block'
            isOpen = true
        }else{
            View.style.display = 'none'
            isOpen = false
        }
    })

    plusBtn2.addEventListener('click', function(){
        if(isOpen === false){
            View2.style.display = 'block'
            isOpen = true
        }else{
            View2.style.display = 'none'
            isOpen = false
        }
    }) //약관내용 펼쳐지기

    totalTerms.addEventListener('click', totalCheck)

    function totalCheck(){
        if(totalTerms.checked === true){
        termsEls.forEach((termsEl) => {
            termsEl.checked = true
        })
    }else{
        termsEls.forEach((termsEl) => {
            termsEl.checked = false
        })
    }}

    function termsCheck(){
        if(terms_01_checked && terms_02.checked && terms_03.checked){
            totalTerms.checked = true
        }else{
            totalTerms.checked = false
        }1
    }//전체동의 체크

    const userId = document.querySelector('#user_id')
    const userPw1 = document.querySelector('#user_pw1')
    const userPw2 = document.querySelector('#user_pw2')
    const telSecond = document.querySelector('#tel_second')
    const telThird = document.querySelector('#tel_third')
    const pwBtn = document.querySelector('.pw_btn')

    userId.addEventListener('change', checkId)
    userPw1.addEventListener('change', checkPw1)
    pwBtn.addEventListener('click', comparePw)
    // telSecond.addEventListener('keyup', moveTel)
    
    

    function checkId(){
        let alertID = document.querySelector('.alert_id')
        if(userId.value.length < 4 || userId.value.length > 16  ){
            alertID.textContent = "다시 입력해주세요"
            alertID.style.color="red";
        }else{
            alertID.textContent = "사용 할 수 있는 아이디입니다."
            alertID.style.color="green";
        }
    }

    function checkPw1(){
        let alertPW = document.querySelector('.alert_pw')
        if(userPw1.value.length < 10){
            alertPW.textContent = "다시 입력해주세요"
            alertPW.style.color = "red";
        }else{
            alertPW.textContent = "사용 할 수 있는 비밀번호입니다."
            alertPW.style.color = "green";
        }
    }


    function comparePw(){
        let alertPWChk = document.querySelector('.alert_pwchk')
        if(userPw1.value === userPw2.value){
            alertPWChk.textContent = "비밀번호가 일치합니다.."
            alertPWChk.style.color = "green";
        }else{
            alertPWChk.textContent = "비밀번호가 일치하지 않습니다."
            alertPWChk.style.color = "red";
        }
    }


    
    telSecond.addEventListener('keyup', telmove)
    function telmove(){
        if(telSecond.value.length === 4){
            telThird.focus()
        }
    }

    
    const idBtn = document.querySelector('.id_btn')
    idBtn.addEventListener('click',function(){
        let inputId = document.querySelector('#user_id').value
        for(let i=0; i<logBox.length; i++){
            if(inputId == ''){
                alert('아이디를 입력해주세요')
                break;
            }

            if(inputId == logBox[i].id){
                alert('사용할 수 없는 아이디입니다. 다시입력해주세요.')
                break;
            }

        }
    }) //아이디 중복확인













    })



    

