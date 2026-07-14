let currentInput = "";
let stage = "origin"; // origin -> dest -> route -> alt -> finished

// Retorna o limite máximo de caracteres permitido na etapa atual
function getMaxLimit() {
    if (stage === "origin" || stage === "dest") {
        return 4; // Códigos ICAO (SBGR, SBRJ...)
    }
    return 6; // Rotas ou altitudes (DIRECT, 25000...)
}

function pressKey(char) {
    // Se o plano já estiver finalizado, impede digitação até resetar
    if (stage === "finished") {
        console.log("Plano de voo já finalizado. Aperte EXEC para reiniciar.");
        return;
    }
    
    const limit = getMaxLimit();
    if (currentInput.length < limit) { 
        currentInput += char;
        updateScratchpad();
    }
}

function clearSpace() {
    console.log("Botão CLR acionado!");
    currentInput = "";
    updateScratchpad();
}

function updateScratchpad() {
    const scratchElement = document.getElementById("scratchpad");
    if (scratchElement) {
        scratchElement.innerText = currentInput ? currentInput + "_" : "_";
    }
}

function executeInput() {
    console.log("Botão EXEC acionado! Input atual:", currentInput, "| Stage atual:", stage);

    // Se o plano já foi concluído, um novo EXEC limpa tudo e reinicia o sistema
    if (stage === "finished") {
        resetFlightPlan();
        return;
    }

    if (currentInput.trim() === "") return;

    if (stage === "origin") {
        if (currentInput.length === 4) {
            const originElement = document.getElementById("view-origin");
            if (originElement) originElement.innerText = currentInput;
            stage = "dest";
            clearSpace();
        } else {
            alert("Erro FMS: O código ICAO de origem deve ter exatamente 4 caracteres!");
        }
    } 
    else if (stage === "dest") {
        if (currentInput.length === 4) {
            const destElement = document.getElementById("view-dest");
            if (destElement) destElement.innerText = currentInput;
            stage = "route";
            clearSpace();
        } else {
            alert("Erro FMS: O código ICAO de destino deve ter exatamente 4 caracteres!");
        }
    } 
    else if (stage === "route") {
        const routeElement = document.getElementById("view-route");
        if (routeElement) routeElement.innerText = currentInput;
        stage = "alt";
        clearSpace();
    } 
    else if (stage === "alt") {
        const altElement = document.getElementById("view-alt");
        if (altElement) altElement.innerText = currentInput;
        stage = "finished";
        clearSpace();
        console.log("Plano de voo completo!");
    }
}

// Função para resetar a tela e começar do zero
function resetFlightPlan() {
    console.log("Reiniciando plano de voo...");
    stage = "origin";
    currentInput = "";
    
    // Reseta os elementos visuais para o padrão
    if (document.getElementById("view-origin")) document.getElementById("view-origin").innerText = "---";
    if (document.getElementById("view-dest")) document.getElementById("view-dest").innerText = "---";
    if (document.getElementById("view-route")) document.getElementById("view-route").innerText = "DIRECT";
    if (document.getElementById("view-alt")) document.getElementById("view-alt").innerText = "25000";
    
    updateScratchpad();
}

// Escutar o teclado físico do computador real
window.addEventListener('keydown', function(e) {
    let key = e.key.toUpperCase();
    
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
    }

    if (/^[A-Z0-9]$/.test(key)) {
        pressKey(key);
        triggerVisualEffect(key);
    }
    if (e.key === 'Backspace') {
        clearSpace();
        triggerVisualEffect('Backspace');
    }
    if (e.key === 'Enter') {
        executeInput();
        triggerVisualEffect('Enter');
    }
});

function triggerVisualEffect(key) {
    if (!key) return;
    try {
        let btn = document.querySelector(`[data-key="${key}"]`);
        if (btn) {
            btn.classList.add('active');
            setTimeout(() => btn.classList.remove('active'), 100);
        }
    } catch (error) {
        console.warn("Tecla sem mapeamento visual:", key);
    }
}