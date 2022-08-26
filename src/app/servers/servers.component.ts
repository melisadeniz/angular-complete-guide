import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  showSecret = false;
  log = [];
  username = '';


  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'TestServer';
  serverCreated = false;
  servers  = ['TestServer', 'TestServer 2']

  constructor() { 
    setTimeout( ()=> {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date())
  }

}
