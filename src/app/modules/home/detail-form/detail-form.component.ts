import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { referenceTypes, detailFormFields } from '../../../utils/constant'
@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit {
  detailForm: FormGroup;

  referenceTypeList = referenceTypes;
  fieldsList: {}[] = detailFormFields;
  fields = new FormControl();

  constructor(
    private fb: FormBuilder) {
    this.detailForm = fb.group({
      referenceArray: this.fb.array([this.createItem()]),
      detailsInfo: this.fb.group({})
    });
  }

  ngOnInit(): void { }


  onChange() {
    this.detailForm.removeControl('detailsInfo');
    let group = {}
    let form_template = this.fields.value;
    form_template.forEach(input_template => {
      group[input_template.label] = new FormControl('');
    })
    this.detailForm.addControl('detailsInfo', new FormGroup(group))
  }

  /** Function to create form group for reference array */
  createItem(): FormGroup {
    return this.fb.group({
      resourceType: new FormControl(''),
      resourceId: new FormControl('')
    });
  }

  /** Function to add item to reference array in form */
  addItem(): void {
    this.referenceFormArray.push(this.createItem());
  }

  get referenceFormArray() {
    return (this.detailForm.get('referenceArray') as FormArray);
  }

  /**Function to remove an item from reference array */
  removeInfo(index) {
    this.referenceFormArray.removeAt(index);
  }


}
