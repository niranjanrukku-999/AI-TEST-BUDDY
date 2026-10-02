function generateTest() {
    const requirement = document.getElementById("requirement").value;
    const result = document.getElementById("result");

    if (requirement.trim() === "") {
        result.innerHTML = "<p>Please enter a requirement.</p>";
        return;
    }

    result.innerHTML = `
        <h3>Generated Test Cases</h3>
        <ol>
            <li>Verify the requirement works correctly.</li>
            <li>Verify valid input is accepted.</li>
            <li>Verify invalid input is rejected.</li>
            <li>Verify empty input is handled correctly.</li>
            <li>Verify the expected result is displayed.</li>
        </ol>
    `;
}