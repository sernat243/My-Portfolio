var repoListEl = document.getElementById('repo-list');



function getRepos() {
    reposUrl = 'https://api.github.com/users/sernat243/repos';

    fetch(reposUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                var createListEl = document.createElement('li');
                var link = document.createElement('a');

                
                link.textContent = data[i].name;
                link.href = data[i].html_url;

                createListEl.appendChild(link);
                repoListEl.appendChild(createListEl);
            }
        })
};

getRepos();