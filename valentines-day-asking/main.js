document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');

    yesBtn.addEventListener('click', function() {
        // navigate to the enthusiastic page where you can add pictures
        window.location.href = 'yes.html';
    });

    // progressive scale + cycling sorrow words for each NO click
    let yesScale = 1;
    const scaleStep = 0.15; // how much bigger YES gets on each NO click
    const sorrowWords = ['grief', 'sorrow', 'sadness', 'heartache', 'tears', 'lonely'];
    let sorrowIndex = 0;
    let noClickCount = 0;

    // smooth animation for the YES button
    yesBtn.style.transition = 'transform 160ms ease';

    noBtn.addEventListener('click', function() {
        // make the YES button progressively larger
        yesScale += scaleStep;
        yesBtn.style.transform = `scale(${yesScale})`;

        // cycle the NO button text through sorrow words
        noBtn.textContent = sorrowWords[sorrowIndex];
        sorrowIndex = (sorrowIndex + 1) % sorrowWords.length;

        // increment NO-click counter and append one more "please" per click
        noClickCount++;
        const pleaseText = Array(noClickCount).fill('please').join(' ');
        message.textContent = `WHY NO??! 💔 ${pleaseText}`;
    });
});