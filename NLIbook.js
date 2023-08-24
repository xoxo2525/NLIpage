function showTabContent(tabIndex) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');

    for (let i = 0; i < tabContents.length; i++) {
        if (i === tabIndex) {
            tabContents[i].style.display = 'block';
            tabs[i].classList.add('active');
        } else {
            tabContents[i].style.display = 'none';
            tabs[i].classList.remove('active');
        }
    }
}

function checkAgreeAndForm() {
    const agreecheckbox = document.querySelector('input[name="login_agree"]:checked');
    const txtbirth = document.getElementById('txtbirth');
    const textmobile2 = document.getElementById('txtMobile2');
    const textmobile3 = document.getElementById('txtMobile3');
    const password = document.getElementById('txtpassword');
    const confirmPassword = document.getElementById('txtConfirmPassword');

    if (!agreecheckbox || agreecheckbox.value !== 'agree') {
        alert('개인정보 이용 수집에 동의하셔야 비회원 예매서비스 이용이 가능합니다.');
    } else if (txtbirth.value.length !== 8) {
        alert("생년월일 8자리를 작성해주세요.");
    } else if (txtMobile2.value === "" || txtMobile3.value === "") {
        alert('휴대폰번호를 모두 입력해주세요.');
    } else if (txtPassword.value.length !== 4) {
        alert('비밀번호 숫자 4자리를 입력해주세요.');
    } else if (txtPassword.value !== txtConfirmPassword.value) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    } else {
        window.location.href = 'booking.html';
    }
}

function checkConfirm() {
    const birth = document.getElementById('cfrbirth');
    const textmobile2 = document.getElementById('cfrMobile2');
    const textmobile3 = document.getElementById('cfrMobile3');
    const password = document.getElementById('cfrPassword');
    const confirmPassword = document.getElementById('cfrConfirmPassword');

    if (cfrbirth.value.length !== 8) {
        alert("생년월일 8자리를 작성해주세요.");
    } else if (cfrMobile2.value === "" || cfrMobile3.value === "") {
        alert('휴대폰번호를 모두 입력해주세요.');
    } else if (cfrPassword.value.length !== 4) {
        alert('비밀번호 숫자 4자리를 입력해주세요.');
    } else {
        window.location.href = 'booked.html';
    }
}
function goToMainPage() {
    window.location.href = "main.html"
}

function goToFindingPage() {
    window.location.href = "find.html"
}

window.addEventListener('load', function () {
    showTabContent(0);
});

const agreeCheckbox = document.getElementById('agreeCheckbox');
const confirmButton = document.getElementById('confirmButton');

agreeCheckbox.addEventListener('change', function () {
    confirmButton.disabled = !agreeCheckbox.checked;

});

function confirmReservation() {
    if (agreeCheckbox.checked) {
        alert('예매 페이지로 이동합니다.');
    } else {
        alert('개인정보 이용 수집에 동의해주세요.');
    }
}