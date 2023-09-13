using CardGameAPI.Models;

namespace CardGameAPI.Services
{
    public static class CardScoringService
    {
        public static int CalculateTotalScore(string[] cards)
        {
            int score = 0;
            int jokerCount = 0;

            foreach (var card in cards)
            {
                if (card == "JK")
                {
                    jokerCount++;
                    continue;
                }

                var cardObj = ParseCard(card);
                score += CalculateCardScore(cardObj);
            }

            if (jokerCount == 1)
                score *= 2;
            else if (jokerCount == 2)
                score *= 4;

            return score;
        }

        private static Card ParseCard(string cardStr)
        {
            if (cardStr.Length != 2)
                throw new ArgumentException("Invalid card format.");

            char valueChar = cardStr[0];
            char suitChar = cardStr[1];

            Suit suit = (Suit)Enum.Parse(typeof(Suit), suitChar.ToString());

            int value;
            switch (valueChar)
            {
                case 'T':
                    value = 10;
                    break;
                case 'J':
                    value = 11;
                    break;
                case 'Q':
                    value = 12;
                    break;
                case 'K':
                    value = 13;
                    break;
                case 'A':
                    value = 14;
                    break;
                default:
                    value = int.Parse(valueChar.ToString());
                    break;
            }

            return new Card { Value = value, CardSuit = suit };
        }

        private static int CalculateCardScore(Card card)
        {
            int baseValue = card.Value;

            switch (card.CardSuit)
            {
                case Suit.C:
                    return baseValue;
                case Suit.D:
                    return baseValue * 2;
                case Suit.H:
                    return baseValue * 3;
                case Suit.S:
                    return baseValue * 4;
                default:
                    throw new ArgumentException("Invalid card suit.");
            }
        }
    }
}
