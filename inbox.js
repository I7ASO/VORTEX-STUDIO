// Vortex Studio - Main JavaScript File (inbox.js)

function copyScript() {
    // تحديد النص من المربع
    const scriptText = document.getElementById('scriptCode').innerText;
    
    // عملية النسخ للحافظة
    navigator.clipboard.writeText(scriptText).then(() => {
        // إظهار تنبيه فخم عند النسخ
        alert("تم نسخ السكربت");
    }).catch(err => {
        console.error('فشل النسخ: ', err);
    });
}

// يمكنك إضافة أكواد برمجية أخرى هنا مستقبلاً
console.log("Vortex Studio System: Online");
