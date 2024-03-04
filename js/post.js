function loadPosts() {
    fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    console.log(posts);

    const postsContainer = document.getElementById('posts-container');

    for(const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.innerHTML =`
            <h4>dfghdfsg ${post.id} </h4>
            <h5> ${post.category} </h5>
            <img src="${post.image}" alt="Post Image">
            <p> ${post.isActive} </p>
            <p> ${post.title} </p>
        `;
        postsContainer.appendChild(postDiv);
    }
}

loadPosts();