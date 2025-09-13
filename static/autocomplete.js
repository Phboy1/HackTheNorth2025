const instruments = [
  "Accordion", "Acoustic Guitar",
  "Bagpipes", "Banjo", "Bassoon", "Bell", "Bongo", "Bugle",
  "Castanets", "Cello", "Clarinet", "Conga", "Cornet", "Cymbals", "Chimes", "Cowbell",
  "Drums",
  "Ektara", "Erhu", "Erxian",
  "Flute", "Flutophone", "Flugelhorn", "French Horn", "Finger Cymbals", "Fiddle",
  "Glockenspiel", "Gongs", "Guitar", "Glass Chord",
  "Harmonica", "Harp", "Harpsichord", "Horn",
  "Ipu", "Igil", "Irish Bouzouki", "Inci", "Irish Uilleann", "Istarski Mih",
  "Jug", "Janggu", "Jew’s Harp", "Jiaohu", "Jinghu",
  "Kazoo", "Keyboard", "Kettle Drum",
  "Lute", "Lyre",
  "Mandolin", "Maracas",
  "Naqara", "Nyckelharpa", "Nadaswaram", "Natural Trumpet", "Nay", "Ney", "Northumbrian Small Pipes", "Nose Flute",
  "Organ", "Oboe",
  "Piano", "Percussions", "Pipe Organ", "Piccolo",
  "Quinticlave", "Qanun", "Quena",
  "Recorder", "Rain Stick", "Rattle", "Reed Pipe",
  "Saxophone", "Snare Drum", "Steel Drum", "Strings", "Sousaphone", "Synthesizer", "Spoons", "Sitar", "Slide Guitar", "Steel Guitar", "Slide Whistle",
  "Tambourine", "Triangle", "Trombone", "Trumpet", "Tuba", "Turntables", "Tom-tom",
  "Ukulele", "Udu", "Ud", "Oud", "Irish Uilleann",
  "Viola", "Violin", "Vertical Flute",
  "Whip/Slapstick", "Welsh Pipes", "Willow Flute", "Wind Chimes", "Washtub Bass", "Whistle",
  "Xylophone", "Xylorimba", "Xalam", "Xiaodihu", "Xiao", "Xun",
  "Yun Lo", "Yang Chin", "Yang Chi’in", "Yueh Ch’in", "Yayli Tanbur", "Yazheng", "Yu", "Yehu",
  "Zither", "Zhongdihu", "Zhuihu", "Zonghu", "Zampogna", "Zaqq", "Zufalo", "Zurna"
];

const input = document.getElementById('instrumentInput');
const suggestionsBox = document.getElementById('suggestions');

input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    suggestionsBox.innerHTML = '';

    if (query.length === 0) return;

    const matches = instruments.filter(instrument =>
        instrument.toLowerCase().startsWith(query)
    ).slice(0, 3);

    matches.forEach(instrument => {
        const li = document.createElement('li');
        li.textContent = instrument;
        li.classList.add('suggestion-item');
        li.addEventListener('click', () => {
            input.value = instrument;
            suggestionsBox.innerHTML = '';
        });
        suggestionsBox.appendChild(li);
    });
});
