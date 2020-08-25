import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

/////////////// THIS IS YOUR APPLICATION SPECIFIC DETAILS //////////////////////////////
const client_id =
  'integration_angular-643a3d93-4b7a-4aac-831c-7096bd4854e0@99f93a5a-d0f4-4519-8f60-fd7115ce009c.gol';
const client_secret = 'abc1598340979224';
const operator_id = '5f43740d2c1c89000a05358b';

////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  username = '';
  title = 'Angular Integration App';
  player = '';
  urlOfIFrame: any = this.sanitizer.bypassSecurityTrustResourceUrl(
    '/integration_angular_7_and_above/signin.jpg'
  );
  constructor(
    private http: HttpClient,
    private _router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.route.queryParams.subscribe((params) => {
      this.player = params['player'];
    });
  }
  login() {
    this._router.navigate([], {
      queryParams: {
        player: this.username,
      },
    });
  }
  async launchGame(gameId) {
    if (this.player && this.player.length > 0) {
      const playerAuth: IPlayerAuth = await this.getPlayerToken(
        this.player,
        this.player
      );
      console.log(playerAuth.token);
      const gameLink = `https://static.luckybeetlegames.com/sudoku/?gameid=${gameId}&operatorid=${operator_id}&playerid=${playerAuth.token}`;
      this.urlOfIFrame = this.sanitizer.bypassSecurityTrustResourceUrl(
        gameLink
      );
    } else {
      alert('Please submit player name');
    }
  }

  // Private Method to get a authentic player token that will be used for launching the game
  getPlayerToken(
    yourSystemUniqueUserId,
    userDiaplayName,
    userCurrency = 'INR'
  ) {
    return this.http
      .post<IPlayerAuth>(
        'https://beta-elantra-api.gameolive.com/api/player/token',
        {
          operator_id,
          client_id,
          client_secret,
          player_uid: yourSystemUniqueUserId,
          currency_code: userCurrency,
          name: userDiaplayName,
        }
      )
      .toPromise();
  }
}

interface IPlayerAuth {
  token: string;
}
