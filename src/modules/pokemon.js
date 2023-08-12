// eslint-disable-next-line import/no-extraneous-dependencies
import Toastify from 'toastify-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'toastify-js/src/toastify.css';

export const countComments = () => document.querySelector('.recentComments').childNodes.length;

export const renderList = async (pokemonAPIBaseUrl, baseUrlInvolve, appId) => {
  const pokemonList = document.querySelector('.pokemon-list');
  pokemonList.innerHTML = '';
  const pokemonPopup = document.querySelector('.pokemonPopup');
  const modal = document.querySelector('.modal');

  // Fetch the list of Pokemon
  const response = await fetch(pokemonAPIBaseUrl);
  let listData = await response.json();
  listData = listData.results;

  // Sort the array elements
  const sortedDataList = [...listData];
  sortedDataList.sort((a, b) => b.score - a.score);
  const objects = sortedDataList;
  // Loop through 18 elements of the array
  const getComments = async (itemId) => {
    // Fetch the updated comments after posting
    const commentsResponse = await fetch(
      `${baseUrlInvolve}${appId}/comments?item_id=${itemId}`,
    );
    const commentsData = await commentsResponse.json();
    // Get the recentComments element
    const recentComments = document.querySelector('.recentComments');

    if (!commentsData.error) {
      // console.error('Invalid comments data format:', commentsData);
      recentComments.innerHTML = '';
      commentsData.forEach((comment) => {
        const commentLi = document.createElement('li');
        commentLi.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
        recentComments.appendChild(commentLi);
      });
      document.getElementById('commentCount').textContent = countComments();
    }
  };

  const getLikes = async () => {
    // Fetch the likes
    const response = await fetch(
      `${baseUrlInvolve}${appId}/likes`,
    );

    const er = await response.text();
    if (er !== '') {
      const likes = JSON.parse(er);
      if (likes.error) {
        Toastify({
          text: likes.error.message,
          className: 'info',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
          },
        }).showToast();
      } else if (likes !== undefined) {
          return likes;
      }
    }
    return [];
  };

  const saveLike = async (itemId, elLikeCount) => {
    // Prepare the data to be sent
    const data = {
      item_id: itemId,
    };

    // Make the POST request to the API
    const postResponse = await fetch(
      `${baseUrlInvolve}${appId}/likes`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    if (postResponse.ok) {
      elLikeCount.counter = Number(elLikeCount.counter) + 1;
      elLikeCount.textContent = ` (${Number(elLikeCount.counter)})`;
    }
  };

  const likes = await getLikes();

  pokemonList.innerHTML = '';
  let i = 1;
  objects.forEach((object) => {
    // Fetch the Pokemon image
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`;

    const showPokemon = async () => {
      const pokeResponse = await fetch(object.url);
      const pokeObject = await pokeResponse.json();
      modal.classList.toggle('show');
      const itemId = pokeObject.id;
      pokemonPopup.innerHTML += `
          <div class="row">
            <div class="pokemonImg col-md-12">
              <img id="itemImage" src="${imageSrc}" alt="${object.name}" />
              <h3>${object.name}</h3>
            </div>
            <div class="comments comment-list-section col-md-6">
              <h3>Recent Comments (<span id='commentCount'>0</span>)</h3>
              <ul class="recentComments comment-list"></ul>
            </div>
            <form autocomplete="off" class="AddComment comment-form col-md-6">
              <label>Add a Comment</label>
              <input type="text" id="name" placeholder="Your Name" required maxLength="20" />
              <textarea rows="7" id="commentText"></textarea>
              <button id="submit" class="btn" type="submit">Comment</button>
            </form>
          </div>
        `;
      await getComments(itemId);
      const commentForm = document.querySelector('.AddComment');
      commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('commentText');
        const username = nameInput.value;
        const comment = commentInput.value;
        // Generate a unique item_id            // Prepare the data to be sent
        const data = {
          item_id: itemId,
          username,
          comment,
        };
          // Make the POST request to the API
        const postResponse = await fetch(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          },
        );
        if (postResponse.ok) {
          // Handle the successful response
          getComments(itemId);
        }
        // Clear the input fields
        nameInput.value = '';
        commentInput.value = '';
      });
      const closeBtn = document.querySelector('.modal-close');
      closeBtn.addEventListener('click', () => {
        pokemonPopup.innerHTML = '';
      });
    };
    const li = document.createElement('li');
    const divDetails = document.createElement('div');
    const divButton = document.createElement('div');
    const elName = document.createElement('label');
    const elLikeParent = document.createElement('label');
    const elLike = document.createElement('i');
    const elLikeCount = document.createElement('span');
    const elIcon = document.createElement('img');
    const elComment = document.createElement('button');

    li.className = 'pokemon-detail';
    divDetails.className = 'd-grid';
    elLike.className = 'fa fa-heart';

    elName.textContent = object.name;
    elComment.textContent = 'Comments';
    elIcon.src = imageSrc;
    elLike.addEventListener(('click'), (() => { saveLike(object.name, elLikeCount); }));

    elLikeParent.appendChild(elLike);
    const like = likes.find((x) => x.item_id === object.name);
    elLikeCount.id = `likes ${i}`;
    elLikeCount.textContent = ` (${like ? like.likes : 0})`;
    elLikeCount.counter = like ? like.likes : 0;
    elLikeParent.appendChild(elLikeCount);
    elComment.addEventListener(
      'click', () => showPokemon(),
    );
    li.appendChild(elIcon);
    divDetails.appendChild(elName);
    divDetails.appendChild(elLikeParent);
    divButton.appendChild(elComment);
    divDetails.appendChild(divButton);
    li.appendChild(divDetails);
    pokemonList.appendChild(li);

    i += 1;
  });
};
