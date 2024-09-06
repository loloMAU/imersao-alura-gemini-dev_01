import THE_FOOL from "./major-arcana/0-the-fool.js";
import THE_MAGICIAN from "./major-arcana/1-the-magician.js";
import THE_HIGH_PRIESTESS from "./major-arcana/2-the-high-priestess.js";
import THE_EMPRESS from "./major-arcana/3-the-empress.js";
import THE_EMPEROR from "./major-arcana/4-the-emperor.js";
import THE_HIEROPHANT from "./major-arcana/5-the-hierophant.js";
import THE_LOVERS from "./major-arcana/6-the-lovers.js";
import THE_CHARIOT from "./major-arcana/7-the-chariot.js";
import STRENGTH from "./major-arcana/8-strength.js";
import THE_HERMIT from "./major-arcana/9-the-hermit.js";
import WHEEL_OF_FORTUNE from "./major-arcana/10-wheel-of-fortune.js";
import JUSTICE from "./major-arcana/11-justice.js";
import THE_HANGED_MAN from "./major-arcana/12-the-hanged-man.js";
import DEATH from "./major-arcana/13-death.js";
import TEMPERANCE from "./major-arcana/14-temperance.js";
import THE_DEVIL from "./major-arcana/15-the-devil.js";
import THE_TOWER from "./major-arcana/16-the-tower.js";
import THE_STAR from "./major-arcana/17-the-star.js";
import THE_MOON from "./major-arcana/18-the-moon.js";
import THE_SUN from "./major-arcana/19-the-sun.js";
import JUDGEMENT from "./major-arcana/20-judgement.js";
import THE_WORLD from "./major-arcana/21-the-world.js";

// Lista com todos os dados das nossas cartas de Arcanos Maiores
const DATABASE = [
  THE_FOOL,
  THE_MAGICIAN,
  THE_HIGH_PRIESTESS,
  THE_EMPRESS,
  THE_EMPEROR,
  THE_HIEROPHANT,
  THE_LOVERS,
  THE_CHARIOT,
  STRENGTH,
  THE_HERMIT,
  WHEEL_OF_FORTUNE,
  JUSTICE,
  THE_HANGED_MAN,
  DEATH,
  TEMPERANCE,
  THE_DEVIL,
  THE_TOWER,
  THE_STAR,
  THE_MOON,
  THE_SUN,
  JUDGEMENT,
  THE_WORLD,
];

// Disponibiliza nosso DATABASE no javascript para ser usado no app.js e outros arquivos
window.DATABASE = DATABASE;
