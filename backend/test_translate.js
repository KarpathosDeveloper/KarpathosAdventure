async function testTranslate() {
  const text = "Hello, welcome to Karpathos! Enjoy our beautiful boat trips and guided hikes.";
  const lang = "el";
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`;
  
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const translated = json[0].map(item => item[0]).join('');
    console.log("Original:", text);
    console.log("Translated:", translated);
  } catch (err) {
    console.error("Translation failed:", err.message);
  }
}

testTranslate();
