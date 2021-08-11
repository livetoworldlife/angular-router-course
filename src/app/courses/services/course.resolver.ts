import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";

@Injectable()
export class CourseResolver implements Resolve<Course> {
    constructor(private courses: CoursesService) {
        
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
        const courseUrl = route.paramMap.get("courseUrl");
        // throw new Error("Method not implemented.");
        return this.courses.loadCourseByUrl(courseUrl);
    }
}