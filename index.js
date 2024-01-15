function calcAvg(){
    const avg1Element = document.getElementById("avg1")
    const avg1 = avg1Element.value

    const avg2Element = document.getElementById("avg2")
    const avg2 = avg2Element.value

    const avg3Element = document.getElementById("avg3")
    const avg3 = avg3Element.value

    const avg4Element = document.getElementById("avg4")
    const avg4 = avg4Element.value

    const avg5Element = document.getElementById("avg5")
    const avg5 = avg5Element.value
    
    const avg6Element = document.getElementById("avg6")
    const avg6 = avg6Element.value

    const avg7Element = document.getElementById("avg7")
    const avg7 = avg7Element.value

    const avg8Element = document.getElementById("avg8")
    const avg8 = avg8Element.value

    const avg9Element = document.getElementById("avg9")
    const avg9 = avg9Element.value

    const avg = (avg1 + avg2 + avg3 + avg4 + avg5 + avg6 + avg7 + avg8 + avg9) / 9;

    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");

    resultElement.style.display = "block";
    scoreElement.textContent = avg.toFixed(1);
}