import { ChangeDetectionStrategy, Component } from '@angular/core'
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone'
import { Geolocation } from '@capacitor/geolocation'

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
	],
})
export class HomePage {
	ngOnInit() {
		this.startWatchingPosition()
	}

	startWatchingPosition() {
		Geolocation.watchPosition({}, (position) => {
			console.log('Got position:', position)
		})
	}
}