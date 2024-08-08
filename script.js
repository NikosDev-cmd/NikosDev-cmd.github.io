document.addEventListener('DOMContentLoaded', async () => {
    const username = 'NikosDev-cmd';
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url);
    const repos = await response.json();
    
    const projectContainer = document.querySelector('.project-container');

    repos.forEach(repo => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3>${repo.name}</h3>
            <a href="${repo.html_url}" target="_blank">View Repository</a>
        `;
        projectContainer.appendChild(projectDiv);
    });
});
