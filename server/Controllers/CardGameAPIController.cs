using System;
using Microsoft.AspNetCore.Mvc;
using CardGameAPI.Services;

namespace CardGameAPI.Controllers;

[ApiController]
[Route("/")]
public class CardGameAPIController : ControllerBase
{
    [HttpPost("score")]
    public IActionResult CalculateScore([FromBody] string[] cards)
    {
        try
        {
            int score = CardScoringService.CalculateTotalScore(cards);
            return Ok(score);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
