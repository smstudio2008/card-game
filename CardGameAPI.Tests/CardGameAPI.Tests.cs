using System;
using Xunit;
using Microsoft.AspNetCore.Mvc;

using CardGameAPI.Controllers;
using CardGameAPI.Models;

namespace CardGameAPI.Tests
{
    public class ScoreCalculatorTests
    {
        [Fact]
        public void Test_SingleCard_2C()
        {
            var controller = new CardGameAPIController();
            var actionResult = controller.CalculateScore(new string[] { "2C" });
            var okResult = actionResult as OkObjectResult;

            Assert.NotNull(okResult);
            var result = (int)okResult?.Value;

            Assert.Equal(2, result);
        }

        [Fact]
        public void Test_SingleCard_JD()
        {
            var controller = new CardGameAPIController();
            var actionResult = controller.CalculateScore(new string[] { "JD" });
            var okResult = actionResult as OkObjectResult;

            Assert.NotNull(okResult);
            var result = (int)okResult?.Value;

            Assert.Equal(22, result);
        }

        [Fact]
        public void Test_MultipleCards_WithJoker()
        {
            var controller = new CardGameAPIController();
            var actionResult = controller.CalculateScore(new string[] { "5C", "7D", "JK", "JK" });
            var okResult = actionResult as OkObjectResult;

            Assert.NotNull(okResult);
            var result = (int)okResult?.Value;

            Assert.Equal(76, result);
        }

        [Fact]
        public void Test_ThreeJokers()
        {
            var controller = new CardGameAPIController();
            var actionResult = controller.CalculateScore(new string[] { "JK", "JK", "JK" });
            var okResult = actionResult as OkObjectResult;

            Assert.NotNull(okResult);
            var result = (int)okResult?.Value;

            Assert.Equal(0, result); ;
        }
    }
}
