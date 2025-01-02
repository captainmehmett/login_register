// Şifre güçlülük kontrolü
document.querySelector('.password-input').addEventListener('input', function(e) {
    const password = e.target.value;
    const strengthBar = e.target.parentElement.querySelector('.strength-bar');
    const strengthText = e.target.parentElement.querySelector('.strength-text');
    
    // Şifre güçlülük kriterleri
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);
    const length = password.length;
    
    let strength = 0;
    if (length > 7) strength++;
    if (hasLower && hasUpper) strength++;
    if (hasNumber) strength++;
    if (hasSpecial) strength++;
    
    // Güçlülük seviyesini güncelle
    const strengthClass = strength === 0 ? ''
        : strength === 1 ? 'strength-weak'
        : strength === 2 ? 'strength-medium'
        : 'strength-strong';
        
    const strengthTexts = ['', 'Zayıf', 'Orta', 'Güçlü'];
    
    e.target.parentElement.classList.remove('strength-weak', 'strength-medium', 'strength-strong');
    e.target.parentElement.classList.add(strengthClass);
    strengthText.textContent = strengthTexts[strength];
});

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation logic here
    // You can add your own validation rules
});

