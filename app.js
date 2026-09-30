function light() {
    document.body.classList.toggle("light");
}

const input = document.getElementById("skinInput");
const iframe = document.getElementById("skinViewer");
input.addEventListener("input", function () {
    const username = encodeURIComponent(input.value);

    iframe.src = `https://kurojs.github.io/McView3D/embed.html?skin=${username}&width=400&height=400&cape=default`;

});
async function downloadSkin() {
    const username = encodeURIComponent(input.value);   
    const url = `https://minotar.net/skin/${encodeURIComponent(username)}`;
    const response = await fetch(url);
    const blob = await response.blob();
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${username}-skin.png`;

    link.click();

    URL.revokeObjectURL(downloadUrl);
}