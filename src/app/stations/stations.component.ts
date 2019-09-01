import { Component, OnInit } from "@angular/core";
import { LoginService, AccountsService } from "../services";
import { Location } from "@angular/common";

const STATIONS = [
  {
    name: "Total Filling Station Ogba",
    company: "Total Nigeria PLC",
    manager: "Samuel Agbonkpolo",
    store: 1000000,
    pumps: 12,
    attendants: 12,
    location: "Agege Road, Pen Cinema, Lagos, Nigeria",
    licenseDate: Date.now(),
    rating: "A+",
  },
  {
    name: "NNPC Filling Station Ogba",
    company: "NNPC",
    manager: "Mamman Barkindo",
    store: 1000000,
    pumps: 22,
    attendants: 22,
    location: "Kalapazin Barracks, TV, Kaduna, Nigeria",
    licenseDate: Date.now(),
    rating: "A+",
  },
  {
    name: "Mobil Filling Station Ogba",
    company: "Mobil Nigeria PLC",
    manager: "Dirisu Jesse",
    store: 1000000,
    pumps: 12,
    attendants: 12,
    location: "Agege Road, Pen Cinema, Lagos, Nigeria",
    licenseDate: Date.now(),
    rating: "A+",
  },
  {
    name: "Gmath Filling Station Ajibode",
    company: "Gmath Enterprise Limites",
    manager: "Saheed Adedibu",
    store: 1000000,
    pumps: 12,
    attendants: 12,
    location: "Ajibode, Aho, Ibadan, Nigeria",
    licenseDate: Date.now(),
    rating: "A-",
  },
  {
    name: "Oando Filling Station Rumu Okoro",
    company: "Oando Nigeria PLC",
    manager: "Ogbonna Emenike",
    store: 10000000,
    pumps: 22,
    attendants: 22,
    location: "Abakaliki Road, Rumu Okoro, Port Harcourt, Nigeria",
    licenseDate: Date.now(),
    rating: "C+",
  },
]

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  time = new Date().toLocaleTimeString();
  collapsed = true;
  password_unchanged: boolean;
  view_cache: boolean;
  loading: boolean;
  cacheList: Array<any>;
  selected: Array<any> = [];
  currentPassword: string;
  newPassword: string;
  confPassword: string;
  user: any;
  stations = STATIONS;

  constructor(
    public service: LoginService,
    private loc: Location,
    private accServ: AccountsService
  ) {
    this.view_cache = false;
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  // addToSelected(name: string) {
  //   console.log(name);
  //   if (this.selected.includes(name)) {
  //     this.selected = this.selected.filter(it => it !== name);
  //     return;
  //   }
  //   this.selected.push(name);
  // }

  deleteItems() {
    if (this.selected.length) {
      this.selected.map(it => {
        this.cacheList = this.cacheList.filter(cac => cac.name !== it.name);
      });
      this.selected = [];
    }
  }

  displayCache() {
    this.view_cache = true;
  }

  updatePassword() {
    this.loading = true;
    this.accServ
      .changePassword({
        id: this.user.id,
        oldpassword: this.currentPassword,
        newpassword: this.newPassword,
        password_changed: true
      })
      .subscribe(
        res => {
          sessionStorage.clear();
          alert(
            "Your password has been updated, you will be redirected to the login page"
          );
          window.location.reload();
          this.loading = false;
        },
        err => {
          console.dir(err);
          alert("An unexpected error occurred");
          this.loading = false;
        }
      );
  }

  back() {
    this.loc.back();
  }

  ngOnInit() {}
}
