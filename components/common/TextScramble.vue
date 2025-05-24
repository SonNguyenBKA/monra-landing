<template>
  <div ref="textElement" class="text-scramble"></div>
</template>

<script setup>
const props = defineProps({
  phrases: {type: Array, default: () => ['Text demo']},
  loop: {type: Boolean, default: false},
  style: {
    type: Object, default: () => ({
      'color1': '#000',
      'color2': '#fff',
      'fontSize': '2.625rem',
      'fontWeight': '700',
      'textTransform': 'lowercase',
      'lineHeight': '120%',
    })
  }
})
const textElement = ref()

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    // Chia text thành các dòng
    const lines = newText.split('\n');
    const oldLines = this.getCurrentLines();
    const maxLines = Math.max(lines.length, oldLines.length);

    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];

    // Xử lý từng dòng một cách độc lập
    for (let lineIndex = 0; lineIndex < maxLines; lineIndex++) {
      const oldLine = oldLines[lineIndex] || '';
      const newLine = lines[lineIndex] || '';
      const maxLength = Math.max(oldLine.length, newLine.length);

      const lineQueue = [];
      for (let i = 0; i < maxLength; i++) {
        const from = oldLine[i] || '';
        const to = newLine[i] || '';
        const start = Math.floor(Math.random() * 200);
        const end = start + Math.floor(Math.random() * 200);
        lineQueue.push({from, to, start, end});
      }

      this.queue.push(lineQueue);
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  getCurrentLines() {
    const lines = [];
    const lineElements = this.el.querySelectorAll('.text-line');
    lineElements.forEach(line => {
      lines.push(line.textContent || '');
    });
    return lines;
  }

  update() {
    let output = '';
    let totalComplete = 0;
    let totalChars = 0;

    for (let lineIndex = 0; lineIndex < this.queue.length; lineIndex++) {
      const lineQueue = this.queue[lineIndex];
      let lineOutput = '';
      let lineComplete = 0;

      for (let i = 0; i < lineQueue.length; i++) {
        let {from, to, start, end, char} = lineQueue[i];
        totalChars++;

        if (this.frame >= end) {
          lineComplete++;
          totalComplete++;
          lineOutput += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            lineQueue[i].char = char;
          }
          lineOutput += `<span class="dud">${char}</span>`;
        } else {
          lineOutput += from;
        }
      }

      // Chỉ hiển thị dòng nếu có nội dung hoặc đang trong quá trình scramble
      if (lineOutput.trim() || lineComplete < lineQueue.length) {
        output += `<span class="text-line">${lineOutput}</span>`;
      }
    }

    this.el.innerHTML = output;

    if (totalComplete === totalChars) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

let fx = null;
let counter = 0;

const next = () => {
  fx.setText(props.phrases[counter]).then(() => {
    if (props.loop) {
      setTimeout(next, 2000);
    }
  });
  counter = (counter + 1) % props.phrases.length;
};

onMounted(() => {
  fx = new TextScramble(textElement.value);
  next();

  // Thêm tương tác click để chuyển phrase
  document.addEventListener('click', () => {
    counter = (counter + 1) % props.phrases.length;
    fx.setText(props.phrases[counter]);
  });
});
</script>

<style scoped>
.text-scramble {
  text-align: v-bind(style.textAlign);
  word-wrap: break-word;
  line-height: v-bind(style.lineHeight);


  font-size: v-bind(style.fontSize);
  font-weight: v-bind(style.fontWeight);
  text-transform: v-bind(style.textTransform);


  background: linear-gradient(90deg, v-bind(style.color1) 0%, v-bind(style.color2) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

:deep(.text-line) {
  display: block;
  font-size: v-bind(style.fontSize);
}

:deep(.dud) {
  color: #757575;
  font-size: calc(v-bind(style.fontSize) * 0.8);
  font-weight: calc(v-bind(style.fontWeight) * 0.8);
}

.cursor {
  display: inline-block;
  background-color: #FAFAFA;
  width: 2px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>
