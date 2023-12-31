import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChallengeActionsComponent } from "./challenge-actions.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [ChallengeActionsComponent],
    exports: [ChallengeActionsComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeActionsModule { }
