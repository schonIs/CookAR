window.onload = function() {
  const scene = document.querySelector('a-scene');
  
  // ボタンの作成
  const button = document.createElement('button');
  button.textContent = '料理切り替え';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.left = '50%';
  button.style.transform = 'translateX(-50%)';
  button.style.zIndex = '9999';
  button.style.padding = '10px';
  document.body.appendChild(button);

  // オブジェクトの参照を取得
  const tacosObject = document.querySelector('a-entity[gltf-model="#tacos"]');
  const seafoodObject = document.querySelector('a-entity[gltf-model="#seafood"]');
  const ramenObject = document.querySelector('a-entity[gltf-model="#ramen"]');
  const hamburgerObject = document.querySelector('a-entity[gltf-model="#hamburger"]');

  // オブジェクトの配列
  const objects = [tacosObject, seafoodObject, ramenObject, hamburgerObject];

  // 現在表示されているオブジェクトのインデックス
  let currentIndex = 0;

  // マーカーが検出されたときのイベントリスナーを追加
  const marker = document.querySelector('a-marker');
  marker.addEventListener('markerFound', function() {
      // マーカーが見つかったときの初期状態を設定
      showObject(currentIndex);
  });

  // 指定されたインデックスのオブジェクトを表示し、他を非表示にする関数
  function showObject(index) {
      objects.forEach((obj, i) => {
          obj.setAttribute('visible', i === index);
      });
  }

  // ボタンクリックイベントの設定
  button.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % objects.length;
      showObject(currentIndex);
  });
};