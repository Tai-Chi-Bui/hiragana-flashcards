document.getElementById('start-button').addEventListener('click', startReview);

function startReview() {
    const category = document.getElementById('category-select').value;
    const flashcardContainer = document.getElementById('flashcard-container');
    flashcardContainer.innerHTML = ''; // Clear previous flashcards
    flashcardContainer.style.display = 'block'; // Show flashcards container

    // Hiragana characters and sounds data
    // https://hkjapanesetutor.com/hiragana-katakana-chart-with-audio-sound/
    const hiraganaData = {
        'a-group': [
            { character: 'あ', sound: 'a', audio: '001_a' },
            { character: 'い', sound: 'i', audio: '002_i' },
            { character: 'う', sound: 'u', audio: '003_u' },
            { character: 'え', sound: 'e', audio: '004_e' },
            { character: 'お', sound: 'o', audio: '005_o' }
        ],
        'k-group': [
            { character: 'か', sound: 'ka', audio: '006_ka' },
            { character: 'き', sound: 'ki', audio: '007_ki' },
            { character: 'く', sound: 'ku', audio: '008_ku' },
            { character: 'け', sound: 'ke', audio: '009_ke' },
            { character: 'こ', sound: 'ko', audio: '010_ko' }
        ],
        's-group': [
            { character: 'さ', sound: 'sa', audio: '011_sa' },
            { character: 'し', sound: 'shi', audio: '012_shi' },
            { character: 'す', sound: 'su', audio: '013_su' },
            { character: 'せ', sound: 'se', audio: '014_se' },
            { character: 'そ', sound: 'so', audio: '015_so' }
        ],
        't-group': [
            { character: 'た', sound: 'ta', audio: 'audio/ta.mp3' },
            { character: 'ち', sound: 'chi', audio: 'audio/chi.mp3' },
            { character: 'つ', sound: 'tsu', audio: 'audio/tsu.mp3' },
            { character: 'て', sound: 'te', audio: 'audio/te.mp3' },
            { character: 'と', sound: 'to', audio: 'audio/to.mp3' }
        ],
        'n-group': [
            { character: 'な', sound: 'na', audio: 'audio/na.mp3' },
            { character: 'に', sound: 'ni', audio: 'audio/ni.mp3' },
            { character: 'ぬ', sound: 'nu', audio: 'audio/nu.mp3' },
            { character: 'ね', sound: 'ne', audio: 'audio/ne.mp3' },
            { character: 'の', sound: 'no', audio: 'audio/no.mp3' }
        ],
        'h-group': [
            { character: 'は', sound: 'ha', audio: 'audio/ha.mp3' },
            { character: 'ひ', sound: 'hi', audio: 'audio/hi.mp3' },
            { character: 'ふ', sound: 'fu', audio: 'audio/fu.mp3' },
            { character: 'へ', sound: 'he', audio: 'audio/he.mp3' },
            { character: 'ほ', sound: 'ho', audio: 'audio/ho.mp3' }
        ],
        'm-group': [
            { character: 'ま', sound: 'ma', audio: 'audio/ma.mp3' },
            { character: 'み', sound: 'mi', audio: 'audio/mi.mp3' },
            { character: 'む', sound: 'mu', audio: 'audio/mu.mp3' },
            { character: 'め', sound: 'me', audio: 'audio/me.mp3' },
            { character: 'も', sound: 'mo', audio: 'audio/mo.mp3' }
        ],
        'y-group': [
            { character: 'や', sound: 'ya', audio: 'audio/ya.mp3' },
            { character: 'ゆ', sound: 'yu', audio: 'audio/yu.mp3' },
            { character: 'よ', sound: 'yo', audio: 'audio/yo.mp3' }
        ],
        'r-group': [
            { character: 'ら', sound: 'ra', audio: 'audio/ra.mp3' },
            { character: 'り', sound: 'ri', audio: 'audio/ri.mp3' },
            { character: 'る', sound: 'ru', audio: 'audio/ru.mp3' },
            { character: 'れ', sound: 're', audio: 'audio/re.mp3' },
            { character: 'ろ', sound: 'ro', audio: 'audio/ro.mp3' }
        ],
        'w-group': [
            { character: 'わ', sound: 'wa', audio: 'audio/wa.mp3' },
            { character: 'を', sound: 'wo', audio: 'audio/wo.mp3' }
        ],
        'n-character': [
            { character: 'ん', sound: 'n', audio: 'audio/n.mp3' }
        ],
        'g-group': [
            { character: 'が', sound: 'ga', audio: 'audio/ga.mp3' },
            { character: 'ぎ', sound: 'gi', audio: 'audio/gi.mp3' },
            { character: 'ぐ', sound: 'gu', audio: 'audio/gu.mp3' },
            { character: 'げ', sound: 'ge', audio: 'audio/ge.mp3' },
            { character: 'ご', sound: 'go', audio: 'audio/go.mp3' }
        ],
        'z-group': [
            { character: 'ざ', sound: 'za', audio: 'audio/za.mp3' },
            { character: 'じ', sound: 'ji', audio: 'audio/ji.mp3' },
            { character: 'ず', sound: 'zu', audio: 'audio/zu.mp3' },
            { character: 'ぜ', sound: 'ze', audio: 'audio/ze.mp3' },
            { character: 'ぞ', sound: 'zo', audio: 'audio/zo.mp3' }
        ],
        'd-group': [
            { character: 'だ', sound: 'da', audio: 'audio/da.mp3' },
            { character: 'ぢ', sound: 'ji', audio: 'audio/ji.mp3' },
            { character: 'づ', sound: 'zu', audio: 'audio/zu.mp3' },
            { character: 'で', sound: 'de', audio: 'audio/de.mp3' },
            { character: 'ど', sound: 'do', audio: 'audio/do.mp3' }
        ],

        'b-group': [
            { character: 'ば', sound: 'ba', audio: 'audio/ba.mp3' },
            { character: 'び', sound: 'bi', audio: 'audio/bi.mp3' },
            { character: 'ぶ', sound: 'bu', audio: 'audio/bu.mp3' },
            { character: 'べ', sound: 'be', audio: 'audio/be.mp3' },
            { character: 'ぼ', sound: 'bo', audio: 'audio/bo.mp3' }
        ],
        'p-group': [
            { character: 'ぱ', sound: 'pa', audio: 'audio/pa.mp3' },
            { character: 'ぴ', sound: 'pi', audio: 'audio/pi.mp3' },
            { character: 'ぷ', sound: 'pu', audio: 'audio/pu.mp3' },
            { character: 'ぺ', sound: 'pe', audio: 'audio/pe.mp3' },
            { character: 'ぽ', sound: 'po', audio: 'audio/po.mp3' }
        ],
        'ky-group': [
            { character: 'きゃ', sound: 'kya', audio: 'audio/kya.mp3' },
            { character: 'きゅ', sound: 'kyu', audio: 'audio/kyu.mp3' },
            { character: 'きょ', sound: 'kyo', audio: 'audio/kyo.mp3' }
        ],
        'sh-group': [
            { character: 'しゃ', sound: 'sha', audio: 'audio/sha.mp3' },
            { character: 'しゅ', sound: 'shu', audio: 'audio/shu.mp3' },
            { character: 'しょ', sound: 'sho', audio: 'audio/sho.mp3' }
        ],
        'ch-group': [
            { character: 'ちゃ', sound: 'cha', audio: 'audio/cha.mp3' },
            { character: 'ちゅ', sound: 'chu', audio: 'audio/chu.mp3' },
            { character: 'ちょ', sound: 'cho', audio: 'audio/cho.mp3' }
        ],
        'ny-group': [
            { character: 'にゃ', sound: 'nya', audio: 'audio/nya.mp3' },
            { character: 'にゅ', sound: 'nyu', audio: 'audio/nyu.mp3' },
            { character: 'にょ', sound: 'nyo', audio: 'audio/nyo.mp3' }
        ],
        'hy-group': [
            { character: 'ひゃ', sound: 'hya', audio: 'audio/hya.mp3' },
            { character: 'ひゅ', sound: 'hyu', audio: 'audio/hyu.mp3' },
            { character: 'ひょ', sound: 'hyo', audio: 'audio/hyo.mp3' }
        ],
        'my-group': [
            { character: 'みゃ', sound: 'mya', audio: 'audio/mya.mp3' },
            { character: 'みゅ', sound: 'myu', audio: 'audio/myu.mp3' },
            { character: 'みょ', sound: 'myo', audio: 'audio/myo.mp3' }
        ],
        'ry-group': [
            { character: 'りゃ', sound: 'rya', audio: 'audio/rya.mp3' },
            { character: 'りゅ', sound: 'ryu', audio: 'audio/ryu.mp3' },
            { character: 'りょ', sound: 'ryo', audio: 'audio/ryo.mp3' }
        ],
        'obsolete-group': [
            { character: 'ゐ', sound: 'wi', audio: 'audio/wi.mp3' },
            { character: 'ゑ', sound: 'we', audio: 'audio/we.mp3' }
        ]
    };

    if (hiraganaData[category]) {
        hiraganaData[category].forEach(item => {
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
                playAudio(item.audio);
            });
            flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
            flashcardContainer.appendChild(flashcard);
        });
    } else {
        flashcardContainer.innerHTML = '<p>No data available for the selected category.</p>';
    }
}

function playAudio(audioCode) {
    const audioUrl = `https://hkjapanesetutor.com/wp-content/uploads/2014/05/${audioCode}.mp3`;
    const audio = new Audio(audioUrl);
    audio.play();
}
