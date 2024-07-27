function adicionar() {
    let formContainer = document.createElement("div");
    formContainer.className = "form-container";

    let form = document.createElement("form"); 

    let fields = [
        { label: "Nome", type: "text", name: "nome" },
        { label: "Nome Fantasia", type: "text", name: "nomeFantasia" },
        { label: "Email", type: "email", name: "email" },
        { label: "Telefone", type: "tel", name: "telefone" },
        { label: "CPF/CNPJ", type: "text", name: "cpfCnpj", id: "cpf"}
    ];

    fields.forEach(field => {
        let fieldContainer = document.createElement("div");
        fieldContainer.className = "field-container";
        
        let label = document.createElement("label");
        label.textContent = field.label;
        
        let input = document.createElement("input");
        input.type = field.type;
        input.name = field.name;
        
        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        form.appendChild(fieldContainer);
    });

    let button = document.createElement("button");
    button.id = "submit-button";
    button.type = "button"; 
    button.textContent = "Adicionar ";
    button.click()
    
    
    form.appendChild(button);

    formContainer.appendChild(form);

    let screen = document.getElementById("screen");
    screen.appendChild(formContainer);

    document.addEventListener('DOMContentLoaded', (event) => {
    const addClientButton = document.getElementById('addClientButton');
    const cpfInput = document.getElementById('cpfInput');
    
    addClientButton.addEventListener('click', () => {
        location.reload();
    });

    cpfInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            location.reload();
        }
    });
});
}



