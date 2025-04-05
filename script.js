
const questions = [
  { type: 7, text: "나는 새로운 경험을 추구한다." },
  { type: 1, text: "나는 원칙을 중요하게 여긴다." },
  { type: 2, text: "나는 다른 사람을 도와주는 것을 즐긴다." },
  { type: 3, text: "나는 성과를 통해 내 가치를 증명하고 싶다." },
  { type: 4, text: "나는 나만의 독특한 감정을 중요하게 생각한다." },
  { type: 5, text: "나는 분석하고 배우는 것을 좋아한다." },
  { type: 6, text: "나는 불확실성에 대비하는 편이다." },
  { type: 8, text: "나는 주도권을 갖는 걸 선호한다." },
  { type: 9, text: "나는 평화롭고 조화로운 관계를 좋아한다." }
];

const descriptions = {
  1: "개혁가 - 원칙 중심, 도덕적, 완벽주의자",
  2: "조력가 - 따뜻하고 이타적인 사람",
  3: "성취자 - 목표 지향적이고 효율적인 사람",
  4: "개인주의자 - 감성적이고 독창적인 사람",
  5: "탐구자 - 분석적이고 사색적인 사람",
  6: "충실가 - 신중하고 책임감 있는 사람",
  7: "열정가 - 낙천적이고 다채로운 사람",
  8: "도전자 - 강인하고 주도적인 사람",
  9: "평화주의자 - 온화하고 수용적인 사람"
};

let index = 0;
const scores = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0 };

function showQuestion() {
  if (index < questions.length) {
    document.querySelector('.question-text').textContent = questions[index].text;
    document.querySelector('.progress').textContent = \`\${index + 1} / \${questions.length}\`;
  } else {
    showResult();
  }
}

function selectAnswer(score) {
  const q = questions[index];
  scores[q.type] += score;
  index++;
  showQuestion();
}

function showResult() {
  const topType = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  window.location.href = `결과페이지/result-type-${topType}.html`;
}

document.addEventListener("DOMContentLoaded", showQuestion);
