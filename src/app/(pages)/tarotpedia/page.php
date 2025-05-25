<?php
// filepath: tarotpedia.php



$cards = [
    [
        "img" => "TheFool.webp", // <-- Corrected path
        "title" => "The Fool",
        "desc" => "New beginnings, spontaneity, and a free spirit."
    ],
    [
        "img" => "Death.webp", // <-- Corrected path
        "title" => "Death",
        "desc" => "Transformation, endings, and new opportunities."
    ],
    [
        "img" => "HighPriestess.webp", // <-- Corrected path
        "title" => "The High Priestess",
        "desc" => "Intuition, wisdom, and hidden knowledge."
    ],
    [
        "img" => "HangedMan.webp", // <-- Corrected path
        "title" => "The Hanged Man",
        "desc" => "Letting go, new perspectives, and surrender."
    ],
    [
        "img" => "TheDevil.webp", // <-- Corrected path
        "title" => "The Devil",
        "desc" => "Temptation, materialism, and self-imposed limitations."
    ],
    [
        "img" => "TheHermit.webp", // <-- Corrected path
        "title" => "The Hermit",
        "desc" => "Solitude, inner guidance, and reflection."
    ],
    [
        "img" => "TheMoon.webp", // <-- Corrected path
        "title" => "The Moon",
        "desc" => "Illusion, intuition, and the subconscious."
    ],
    [
        "img" => "TheSun.webp", // <-- Corrected path
        "title" => "The Sun",
        "desc" => "Joy, success, and positivity."
    ],
    [
        "img" => "TheTower.png", // <-- Corrected path
        "title" => "The Tower",
        "desc" => "Sudden change, upheaval, and revelation."
    ],
    [
        "img" => "WheelOfFortune.webp", // <-- Corrected path
        "title" => "The Wheel Of Fortune",
        "desc" => "Cycles, fate, and turning points."
    ],
];



// Search logic
$search = isset($_GET['search']) ? trim($_GET['search']) : '';
$found = null;
if ($search !== '') {
    foreach ($cards as $card) {
        if (stripos($card['title'], $search) !== false) {
            $found = $card;
            break;
        }
    }
}

// Slideshow logic (if not searching)
$i = isset($_GET['i']) ? intval($_GET['i']) : 0;
$total = count($cards);
if ($i < 0) $i = $total - 1;
if ($i >= $total) $i = 0;
$card = $found ?: $cards[$i];
?>
<!DOCTYPE html>
<html>
<head>
    <title>Tarotpedia Search</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            background: linear-gradient(135deg, #2F2235 0%, #000 100%);
            min-height: 100vh;
            margin: 0;
            font-family: 'Segoe UI', Arial, sans-serif;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .container {
            margin-top: 32px;
            background: rgba(58,38,63,0.7);
            border-radius: 24px;
            box-shadow: 0 8px 32px #0008;
            padding: 40px 24px 32px 24px;
            max-width: 540px;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 36px;
        }
        .img-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 120px;
        }
        .card-img {
            width: 110px;
            height: 165px;
            object-fit: cover;
            border-radius: 18px;
            box-shadow: 0 4px 24px #000a;
            border: 2px solid #6B3FA0;
            background: #2F2235;
            margin-bottom: 12px;
        }
        .img-title {
            font-size: 1.1rem;
            color: #fff;
            font-weight: 600;
            text-align: center;
            margin-top: 4px;
        }
        .info-col {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .card-title {
            font-size: 2rem;
            font-weight: 700;
            color: #FFC6C6;
            margin-bottom: 10px;
            text-align: left;
            text-shadow: 0 2px 8px #0007;
        }
        .card-desc {
            font-size: 1.1rem;
            color: #fff;
            opacity: 0.92;
            text-align: left;
            margin-bottom: 24px;
        }
        .controls {
            display: flex;
            justify-content: center;
            gap: 32px;
            margin-top: 24px;
        }
        .controls a {
            color: #FFC6C6;
            background: #3a263f;
            padding: 8px 22px;
            border-radius: 12px;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 600;
            box-shadow: 0 2px 8px #0005;
            transition: background 0.2s, color 0.2s;
        }
        .controls a:hover {
            background: #6B3FA0;
            color: #fff;
        }
        .counter {
            margin-top: 8px;
            color: #E6D6F3;
            font-size: 1rem;
            letter-spacing: 1px;
            text-align: center;
        }
        h1 {
            font-size: 3rem;
            font-weight: 800;
            letter-spacing: 2px;
            margin-bottom: 32px;
            text-shadow: 0 4px 24px #000a;
        }
        .search-bar {
            margin-top: 32px;
            margin-bottom: 8px;
            display: flex;
            justify-content: center;
        }
        .search-bar input[type="text"] {
            padding: 10px 16px;
            border-radius: 10px 0 0 10px;
            border: none;
            font-size: 1rem;
            width: 220px;
            outline: none;
        }
        .search-bar button {
            padding: 10px 18px;
            border-radius: 0 10px 10px 0;
            border: none;
            background: #6B3FA0;
            color: #fff;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }
        .search-bar button:hover {
            background: #FFC6C6;
            color: #3a263f;
        }
        .not-found {
            color: #FFC6C6;
            font-size: 1.2rem;
            margin: 24px 0;
            text-align: center;
        }
        @media (max-width: 700px) {
            .container {
                flex-direction: column;
                gap: 18px;
                padding: 24px 8px 18px 8px;
                max-width: 95vw;
            }
            .card-title, .card-desc { text-align: center; }
        }
    </style>
</head>
<body>
    <h1>Tarotpedia</h1>
    <form class="search-bar" method="get" action="">
        <input type="text" name="search" placeholder="Search for a card..." value="<?php echo htmlspecialchars($search); ?>">
        <button type="submit">Search</button>
    </form>
    <?php if ($search !== '' && !$found): ?>
        <div class="not-found">No card found for "<?php echo htmlspecialchars($search); ?>"</div>
    <?php else: ?>
    <div class="container">
        <div class="img-col">
            <img class="card-img" src="ima/<?php echo htmlspecialchars($card['img']); ?>" alt="<?php echo htmlspecialchars($card['title']); ?>">
            <div class="img-title"><?php echo htmlspecialchars($card['title']); ?></div>
        </div>
        <div class="info-col">
            <div class="card-title"><?php echo htmlspecialchars($card['title']); ?></div>
            <div class="card-desc"><?php echo htmlspecialchars($card['desc']); ?></div>
        </div>
    </div>
    <?php endif; ?>
    <?php if ($search === ''): ?>
    <div class="controls">
        <a href="?i=<?php echo ($i - 1 + $total) % $total; ?>">&laquo; Previous</a>
        <a href="?i=<?php echo ($i + 1) % $total; ?>">Next &raquo;</a>
    </div>
    <div class="counter">
        <?php echo ($i + 1) . " / $total"; ?>
    </div>
    <?php endif; ?>
</body>
</html>