document.getElementById('start-button').addEventListener('click', startReview);

async function startReview() {
    const category = document.getElementById('category-select').value;
    const flashcardContainer = document.getElementById('flashcard-container');
    flashcardContainer.innerHTML = ''; // Clear previous flashcards
    flashcardContainer.style.display = 'block'; // Show flashcards container

    const hiraganaData = {
        'a-group': [
            { character: 'あ', sound: 'a' },
            { character: 'い', sound: 'i' },
            { character: 'う', sound: 'u' },
            { character: 'え', sound: 'e' },
            { character: 'お', sound: 'o' }
        ],
        'k-group': [
            { character: 'か', sound: 'ka' },
            { character: 'き', sound: 'ki' },
            { character: 'く', sound: 'ku' },
            { character: 'け', sound: 'ke' },
            { character: 'こ', sound: 'ko' }
        ],
        's-group': [
            { character: 'さ', sound: 'sa' },
            { character: 'し', sound: 'shi' },
            { character: 'す', sound: 'su' },
            { character: 'せ', sound: 'se' },
            { character: 'そ', sound: 'so' }
        ],
        't-group': [
            { character: 'た', sound: 'ta' },
            { character: 'ち', sound: 'chi' },
            { character: 'つ', sound: 'tsu' },
            { character: 'て', sound: 'te' },
            { character: 'と', sound: 'to' }
        ],
        'n-group': [
            { character: 'な', sound: 'na' },
            { character: 'に', sound: 'ni' },
            { character: 'ぬ', sound: 'nu' },
            { character: 'ね', sound: 'ne' },
            { character: 'の', sound: 'no' }
        ],
        'h-group': [
            { character: 'は', sound: 'ha' },
            { character: 'ひ', sound: 'hi' },
            { character: 'ふ', sound: 'fu' },
            { character: 'へ', sound: 'he' },
            { character: 'ほ', sound: 'ho' }
        ],
        'm-group': [
            { character: 'ま', sound: 'ma' },
            { character: 'み', sound: 'mi' },
            { character: 'む', sound: 'mu' },
            { character: 'め', sound: 'me' },
            { character: 'も', sound: 'mo' }
        ],
        'y-group': [
            { character: 'や', sound: 'ya' },
            { character: 'ゆ', sound: 'yu' },
            { character: 'よ', sound: 'yo' }
        ],
        'r-group': [
            { character: 'ら', sound: 'ra' },
            { character: 'り', sound: 'ri' },
            { character: 'る', sound: 'ru' },
            { character: 'れ', sound: 're' },
            { character: 'ろ', sound: 'ro' }
        ],
        'w-group': [
            { character: 'わ', sound: 'wa' },
            { character: 'を', sound: 'wo' }
        ],
        'n-character': [
            { character: 'ん', sound: 'n' }
        ],
        'g-group': [
            { character: 'が', sound: 'ga' },
            { character: 'ぎ', sound: 'gi' },
            { character: 'ぐ', sound: 'gu' },
            { character: 'げ', sound: 'ge' },
            { character: 'ご', sound: 'go' }
        ],
        'z-group': [
            { character: 'ざ', sound: 'za' },
            { character: 'じ', sound: 'ji' },
            { character: 'ず', sound: 'zu' },
            { character: 'ぜ', sound: 'ze' },
            { character: 'ぞ', sound: 'zo' }
        ],
        'd-group': [
            { character: 'だ', sound: 'da' },
            { character: 'ぢ', sound: 'ji' },
            { character: 'づ', sound: 'zu' },
            { character: 'で', sound: 'de' },
            { character: 'ど', sound: 'do' }
        ],
    
        'b-group': [
            { character: 'ば', sound: 'ba' },
            { character: 'び', sound: 'bi' },
            { character: 'ぶ', sound: 'bu' },
            { character: 'べ', sound: 'be' },
            { character: 'ぼ', sound: 'bo' }
        ],
        'p-group': [
            { character: 'ぱ', sound: 'pa' },
            { character: 'ぴ', sound: 'pi' },
            { character: 'ぷ', sound: 'pu' },
            { character: 'ぺ', sound: 'pe' },
            { character: 'ぽ', sound: 'po' }
        ],
        'ky-group': [
            { character: 'きゃ', sound: 'kya' },
            { character: 'きゅ', sound: 'kyu' },
            { character: 'きょ', sound: 'kyo' }
        ],
        'sh-group': [
            { character: 'しゃ', sound: 'sha' },
            { character: 'しゅ', sound: 'shu' },
            { character: 'しょ', sound: 'sho' }
        ],
        'ch-group': [
            { character: 'ちゃ', sound: 'cha' },
            { character: 'ちゅ', sound: 'chu' },
            { character: 'ちょ', sound: 'cho' }
        ],
        'ny-group': [
            { character: 'にゃ', sound: 'nya' },
            { character: 'にゅ', sound: 'nyu' },
            { character: 'にょ', sound: 'nyo' }
        ],
        'hy-group': [
            { character: 'ひゃ', sound: 'hya' },
            { character: 'ひゅ', sound: 'hyu' },
            { character: 'ひょ', sound: 'hyo' }
        ],
        'my-group': [
            { character: 'みゃ', sound: 'mya' },
            { character: 'みゅ', sound: 'myu' },
            { character: 'みょ', sound: 'myo' }
        ],
        'ry-group': [
            { character: 'りゃ', sound: 'rya' },
            { character: 'りゅ', sound: 'ryu' },
            { character: 'りょ', sound: 'ryo' }
        ],
        'obsolete-group': [
            { character: 'ゐ', sound: 'wi' },
            { character: 'ゑ', sound: 'we' }
        ]
    };
    

    if (hiraganaData[category]) {
        for (const item of hiraganaData[category]) {
            const flashcard = document.createElement('div');
            flashcard.classList.add('flashcard');
            flashcard.innerHTML = `
                <div class="front">${item.character}</div>
                <div class="back">
                    <p>${item.sound}</p>
                    <span class="play-sound-icon">&#9658;</span> <!-- Play icon -->
                </div>
            `;
            flashcard.querySelector('.play-sound-icon').addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent card flip on icon click
                playAudio(item.character); // Pass character to playAudio
            });
            flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
            flashcardContainer.appendChild(flashcard);
        }
    } else {
        flashcardContainer.innerHTML = '<p>No data available for the selected category.</p>';
    }
}

function playAudio(character) {
    const utterance = new SpeechSynthesisUtterance(character); // Use the Hiragana character for pronunciation
    utterance.lang = 'ja-JP'; // Set the language to Japanese
    window.speechSynthesis.speak(utterance); // Speak the character
}
