<template>
	<div>
		<div class="_main_content">
            <div class="_1card _hei100">
                <div class="_form_body">
                    <Form label-position="top">
                        <div class="_tax_top">
                            <div class="_tax_top_one">
                                <p class="_tax_top_one_text">Form <span class="_tax_top_one_span">W-9</span> (Rev. October 2018) Department of the Treasury Internal Revenue Service</p>
                            </div>

                            <div class="_tax_top_two">
                                <h2 class="_tax_top_title">Request for Texpayer<br/> Identification Number and Certification</h2>
                                <p class="_tax_top_text">▶ Go to <a href=""><i>www.irs.gov/FormW9</i></a> for instructions and the latest information.</p>
                            </div>

                            <div class="_tax_top_give">
                                <p class="_tax_top_give_text">Give Form to the requester. Do not send to the IRS.</p>
                            </div>
                        </div>

                        <div class="_tax_sec_two">
                            <div class="_tax_sec_prinit">
                                <p class="_tax_sec_prinit_text"><strong>Print or type.</strong> <br/> See <strong>Specific Instructions</strong> on page 3.</p>
                            </div>

                            <div class="_tax_sec_main">
                                <div class="_tax_sec_one">
                                    <p class="_tax_sec_title"><strong>1</strong> Name (as shown on your income tax return). Name is required on this line; do not leave this line blank.</p>
                                    <FormItem label="" :error="errorData.name">
                                        <Input v-model="form.name" type="text" placeholder=""/>
                                    </FormItem>
                                </div>

                                <div class="_tax_sec_one">
                                    <p class="_tax_sec_title"><strong>2</strong> Business name/disregarded entity name, if different from above</p>
                                    <FormItem label="" :error="errorData.businessName">
                                        <Input v-model="form.businessName" type="text" placeholder=""/>
                                    </FormItem>
                                </div>

                                <div class="_tax_sec_three">
                                    <div class="_tax_sec_three_main">
                                        <p class="_tax_sec_title"><strong>3</strong> Business name/disregarded entity name, if different from above</p>
                                        <FormItem label="" :error="errorData.businessType">
                                            <RadioGroup  v-model="form.businessType">
                                                <Radio label="Individual/sole">
                                                    <span>Individual/sole proprietor or single-member LLC</span>
                                                </Radio>
                                                <Radio label="C Corporation">
                                                    <span> C Corporation</span>
                                                </Radio>
                                                <Radio label="S Corporation">
                                                    <span>S Corporation</span>
                                                </Radio>
                                                <Radio label="Partnership">
                                                    <span>Partnership</span>
                                                </Radio>
                                                <Radio label="Trust/estate">
                                                    <span>Trust/estate</span>
                                                </Radio>
                                                <Radio style="word-break: break-word;width:100%;white-space: normal;" label="Classification">
                                                    <span>Limited liability company. Enter the tax classification (C=C corporation, S=S 
                                                    corporation, P=Partnership) ▶ 
                                                        <span style="width:220px;display: inline-block;">
                                                            <FormItem style="margin: 0 0 10px" label="">
                                                                <Input v-if="form.businessType=='Classification'" v-model="form.businessValue" type="text" placeholder=""/>
                                                                <Input v-else disabled  type="text" placeholder=""/>
                                                            </FormItem>
                                                        </span>
                                                        <br/>
                                                        <span style="word-break: break-word;">Note: Check the appropriate box in the line above for the tax classification of the single-member owner. Do not check
                                                        LLC if the LLC is classified as a single-member LLC that is disregarded from the owner 
                                                        unless the owner of the LLC is
                                                        another LLC that is not disregarded from the owner for U.S. federal tax purposes. 
                                                        Otherwise, a single-member LLC that
                                                        is disregarded from the owner should check the appropriate box for the tax classification of its owner.
                                                        </span>
                                                    </span>
                                                </Radio>

                                                <Radio label="Other">
                                                    <span>Other (see instructions) 
                                                        <span style="width:330px;display: inline-block;">
                                                            <FormItem style="margin: 0 0 10px" label="">
                                                                <Input v-if="form.businessType=='Other'" v-model="form.businessValue" type="text" placeholder=""/>
                                                                <Input v-else disabled  type="text" placeholder=""/>
                                                            </FormItem>
                                                        </span>
                                                    </span>
                                                </Radio>
                                            </RadioGroup>
                                        </FormItem>
                                    </div>
                                    <div class="_tax_sec_three_four">
                                        <div class="_tax_sec_three_four_main">
                                            <p class="_tax_sec_title"><strong>4</strong> Exemptions (codes apply only to certain entities, not individuals; see instructions on page 3):
                                                <br/> Exempt payee code (if any)
                                                <span style="width:120px;display: inline-block;">
                                                    <FormItem label="" :error="errorData.exemptionsPayeeCode">
                                                        <Input v-model="form.exemptionsPayeeCode" type="text" placeholder=""/>
                                                    </FormItem>   
                                                </span> 
                                                <br/> Exemption from FATCA reporting code (if any)
                                                <span style="width:230px;display: inline-block;">
                                                    <FormItem label="" :error="errorData.exemptionsReportingCode">
                                                        <Input  v-model="form.exemptionsReportingCode" type="text" placeholder=""/>
                                                    </FormItem>   
                                                </span> 
                                            </p>

                                            <p class="applies"><i>Applies to accounts maintained outside the U.S.)</i></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="_tax_secc_five">
                                    <div class="_tax_secc_five_one">
                                        <div class="_tax_sec_one">
                                            <p class="_tax_sec_title"><strong>5</strong> Address (number, street, and apt. or suite no.) See instructions.</p>
                                            <FormItem label="" :error="errorData.address">
                                                <Input v-model="form.address" type="text" placeholder=""/>
                                            </FormItem>
                                        </div>

                                        <div class="_tax_secc_six">
                                            <p class="_tax_sec_title"><strong>6</strong> City, state, and ZIP code</p>
                                            <FormItem label="" :error="errorData.stateCityZip">
                                                <Input v-model="form.stateCityZip" type="text" placeholder=""/>
                                            </FormItem>
                                        </div>
                                    </div>
                                    <div class="_tax_secc_five_two">
                                        <div class="">
                                            <p class="_tax_sec_title">Requester’s name and address (optional)</p>
                                            <FormItem label="" :error="errorData.requesterAddress">
                                                <Input v-model="form.requesterAddress" type="textarea" :rows="6" placeholder=""/>
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>

                                <div class="_tax_sec_seven">
                                    <p class="_tax_sec_title"><strong>7</strong> List account number(s) here (optional)</p>
                                    <FormItem label="" :error="errorData.listAccountNumber">
                                        <Input v-model="form.listAccountNumber" type="text" placeholder=""/>
                                    </FormItem>
                                </div>
                            </div>
                        </div>

                        <div class="_part1">
                            <p class="_part1_title"><span>Part I</span>Taxpayer Identification Number (TIN)</p>

                            <div class="_part1_main">
                                <div class="_part1_main_left">
                                    <p class="pb-10 _part1_text">Enter your TIN in the appropriate box. The TIN provided must match the name given on line 1 to avoid
                                    backup withholding. For individuals, this is generally your social security number (SSN). However, for a
                                    resident alien, sole proprietor, or disregarded entity, see the instructions for Part I, later. For other
                                    entities, it is your employer identification number (EIN). If you do not have a number, see How to get a
                                    TIN, later</p>

                                    <p class="_part1_text"><strong>Note:</strong> If the account is in more than one name, see the instructions for line 1. Also see What Name and
                                    Number To Give the Requester for guidelines on whose number to enter.</p>
                                </div>

                                <div class="_part1_main_right">
                                    <p class="_part1_main_title">Social security number</p>

                                    <div class="_part1_input">
                                        <FormItem label="" :error="errorData.socialSecurityNumber">
                                            <div class="_part1_input_main">
                                                <div class="_part1_input_items">
                                                    <!-- <InputNumber :max="1" :min="1" v-model="formValu.value1"></InputNumber> -->
                                                    <Input  @on-keypress="formateInput(1)" v-model="formValu.value1" :maxlength="1" type="text"/>
                                                </div>

                                                <div class="_part1_input_items">
                                                    <!-- <InputNumber :max="1" :min="1" v-model="formValu.value2"></InputNumber> -->
                                                    <Input @on-keypress="formateInput(2)" v-model="formValu.value2" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_items">
                                                    <!-- <InputNumber :max="1" :min="0" v-model="formValu.value3"></InputNumber> -->
                                                    <Input @on-keypress="formateInput(3)" v-model="formValu.value3" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_dot">
                                                    -
                                                </div>
                                                <div class="_part1_input_items">
                                                    <!-- <InputNumber :max="1" :min="0" v-model="formValu.value4"></InputNumber> -->
                                                    <Input @on-keypress="formateInput(4)" v-model="formValu.value4" :maxlength="1"  type="text"/>
                                                </div>
                                                <div class="_part1_input_items">
                                                    <!-- <InputNumber :max="1" :min="0" v-model="formValu.value5"></InputNumber> -->
                                                    <Input @on-keypress="formateInput(5)" v-model="formValu.value5" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_dot">
                                                    -
                                                </div>
                                                <div class="_part1_input_items">
                                                    <!-- <InputNumber :max="1" :min="0" v-model="formValu.value6"></InputNumber> -->
                                                    <Input @on-keypress="formateInput(6)" v-model="formValu.value6" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_items">
                                                    <!-- <InputNumber :max="1" :min="0" v-model="formValu.value7"></InputNumber> -->
                                                    <Input @on-keypress="formateInput(7)" v-model="formValu.value7" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_items">
                                                    <!-- <InputNumber :max="1" :min="0" v-model="formValu.value8"></InputNumber> -->
                                                    <Input @on-keypress="formateInput(8)" v-model="formValu.value8" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_items">
                                                    <!-- <InputNumber :max="1" :min="0" v-model="formValu.value9"></InputNumber> -->
                                                    <Input @on-keypress="formateInput(9)" v-model="formValu.value9" :maxlength="1" type="text"/>
                                                </div>
                                            </div>
                                        </FormItem>
                                    </div>

                                    <p class="_or">or</p>

                                    <p class="_part1_main_title">Employer identification number</p>

                                    <div class="_part1_input">
                                        <FormItem label="" :error="errorData.employerIndentificationNumber">
                                            <div class="_part1_input_main">
                                                <div class="_part1_input_items">
                                                    <Input @on-keypress="formateInput(10)" v-model="formValu.value10" :maxlength="1" type="text"/>
                                                </div>

                                                <div class="_part1_input_items">
                                                    <Input @on-keypress="formateInput(11)" v-model="formValu.value11" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_dot">
                                                    -
                                                </div>
                                                <div class="_part1_input_items">
                                                    <Input @on-keypress="formateInput(12)" v-model="formValu.value12" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_items">
                                                    <Input @on-keypress="formateInput(13)" v-model="formValu.value13" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_items">
                                                    <Input @on-keypress="formateInput(14)" v-model="formValu.value14" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_items">
                                                    <Input @on-keypress="formateInput(15)" v-model="formValu.value15" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_items">
                                                    <Input @on-keypress="formateInput(16)" v-model="formValu.value16" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_items">
                                                    <Input @on-keypress="formateInput(17)" v-model="formValu.value17" :maxlength="1" type="text"/>
                                                </div>
                                                <div class="_part1_input_items">
                                                    <Input @on-keypress="formateInput(18)" v-model="formValu.value18" :maxlength="1" type="text"/>
                                                </div>
                                            </div>
                                        </FormItem>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="_part1 pb-10">
                            <p class="_part1_title"><span>Part II</span>Certification</p>

                            <p class="_part1_text pb-10 pt-10 ">Under penalties of perjury, I certify that:</p>

                            <ul class="_part_list">
                                <li>1. The number shown on this form is my correct taxpayer identification number (or I am waiting for a number to be issued to me); and</li>
                                <li>2. I am not subject to backup withholding because: (a) I am exempt from backup withholding, or (b) I have not been notified by the Internal Revenue
                                Service (IRS) that I am subject to backup withholding as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am
                                no longer subject to backup withholding; and</li>
                                <li>3. I am a U.S. citizen or other U.S. person (defined below); and</li>
                                <li>4. The FATCA code(s) entered on this form (if any) indicating that I am exempt from FATCA reporting is correct.</li>
                                <li><strong>Certification</strong> instructions. You must cross out item 2 above if you have been notified by the IRS that you are currently subject to backup withholding because
                                you have failed to report all interest and dividends on your tax return. For real estate transactions, item 2 does not apply. For mortgage interest paid,
                                acquisition or abandonment of secured property, cancellation of debt, contributions to an individual retirement arrangement (IRA), and generally, payments
                                other than interest and dividends, you are not required to sign the certification, but you must provide your correct TIN. See the instructions for Part II, later.</li>
                            </ul>
                        </div>

                        <div class="_sign">
                            <div class="_sign_header">
                                <div class="_sign_header_left">
                                    <p class="_sign_header_here">Sign <br/> Here</p>
                                    <p class="_sign_header_sig">Signature of <br/> U.S. Person ▶</p>
                                </div>

                                <div class="_sign_header_right">
                                    <p class="_sign_header_right_text">Date ▶</p>
                                </div>
                            </div>

                            <div class="_sign_main">
                                <div class="_sign_main_left">
                                    <h1 class="_sign_main_title">General Instructions</h1>

                                    <p class="_part1_text pb-10">Section references are to the Internal Revenue Code unless otherwise
                                    noted.</p>

                                    <p class="_part1_text pb-10"><strong>Future developments.</strong> For the latest information about developments
                                    related to Form W-9 and its instructions, such as legislation enacted
                                    after they were published, go to <a href=""><i>www.irs.gov/FormW9.</i></a></p>
                                    <h1 class="_sign_main_title">Purpose of Form</h1>
                                    <p class="_part1_text pb-10">An individual or entity (Form W-9 requester) who is required to file an
                                    information return with the IRS must obtain your correct taxpayer
                                    identification number (TIN) which may be your social security number
                                    (SSN), individual taxpayer identification number (ITIN), adoption
                                    taxpayer identification number (ATIN), or employer identification number
                                    (EIN), to report on an information return the amount paid to you, or other
                                    amount reportable on an information return. Examples of information
                                    returns include, but are not limited to, the following.</p>

                                    <ul class="_dot_list">
                                        <li>Form 1099-INT (interest earned or paid)</li>
                                    </ul>

                                    <p class="_part1_text pb-10">By signing the filled-out form, you: </p>

                                    <ul class="_4list">
                                        <li>1. Certify that the TIN you are giving is correct (or you are waiting for a number to be issued),</li>
                                        <li>2. Certify that you are not subject to backup withholding, or</li>
                                        <li>3. Claim exemption from backup withholding if you are a U.S. exempt
                                        payee. If applicable, you are also certifying that as a U.S. person, your
                                        allocable share of any partnership income from a U.S. trade or business
                                        is not subject to the withholding tax on foreign partners' share of
                                        effectively connected income, and </li>
                                        <li>4. Certify that FATCA code(s) entered on this form (if any) indicating
                                        that you are exempt from the FATCA reporting, is correct. See What is
                                        FATCA reporting, later, for further information.</li>
                                    </ul>
                                    
                                    <p class="_part1_text pb-10"><strong>Note:</strong> If you are a U.S. person and a requester gives you a form other
                                    than Form W-9 to request your TIN, you must use the requester’s form if
                                    it is substantially similar to this Form W-9.</p>

                                    <p class="_part1_text pb-10"><strong>Definition of a U.S. person.</strong> For federal tax purposes, you are
                                    considered a U.S. person if you are:</p>
                                    <ul class="_dot_list">
                                        <li>An individual who is a U.S. citizen or U.S. resident alien;</li>
                                        <li>A partnership, corporation, company, or association created or organized in the United States or under the laws of the United States;</li>
                                        <li>An estate (other than a foreign estate); or</li>
                                        <li>A domestic trust (as defined in Regulations section 301.7701-7).</li>
                                    </ul>
                                    <p class="_part1_text pb-10"><strong>Special rules for partnerships.</strong> Partnerships that conduct a trade or
                                    business in the United States are generally required to pay a withholding
                                    tax under section 1446 on any foreign partners’ share of effectively
                                    connected taxable income from such business. Further, in certain cases
                                    where a Form W-9 has not been received, the rules under section 1446
                                    require a partnership to presume that a partner is a foreign person, and
                                    pay the section 1446 withholding tax. Therefore, if you are a U.S. person
                                    that is a partner in a partnership conducting a trade or business in the
                                    United States, provide Form W-9 to the partnership to establish your
                                    U.S. status and avoid section 1446 withholding on your share of
                                    partnership income.</p>
                                    <p class="_part1_text pb-10">In the cases below, the following person must give Form W-9 to the
                                    partnership for purposes of establishing its U.S. status and avoiding
                                    withholding on its allocable share of net income from the partnership
                                    conducting a trade or business in the United States.</p>
                                    <ul class="_dot_list">
                                        <li>In the case of a disregarded entity with a U.S. owner, the U.S. owner of the disregarded entity and not the entity;</li>
                                        <li>In the case of a grantor trust with a U.S. grantor or other U.S. owner,
                                        generally, the U.S. grantor or other U.S. owner of the grantor trust and
                                        not the trust; and</li>
                                        <li>In the case of a U.S. trust (other than a grantor trust), the U.S. trust (other than a grantor trust) and not the beneficiaries of the trust.</li>
                                    </ul>

                                    <p class="_part1_text pb-10"><strong>Foreign person.</strong> If you are a foreign person or the U.S. branch of a
                                    foreign bank that has elected to be treated as a U.S. person, do not use
                                    Form W-9. Instead, use the appropriate Form W-8 or Form 8233 (see
                                    Pub. 515, Withholding of Tax on Nonresident Aliens and Foreign
                                    Entities).</p>
                                    <p class="_part1_text pb-10"><strong>Nonresident alien who becomes a resident alien.</strong> Generally, only a
                                    nonresident alien individual may use the terms of a tax treaty to reduce
                                    or eliminate U.S. tax on certain types of income. However, most tax
                                    treaties contain a provision known as a “saving clause.” Exceptions
                                    specified in the saving clause may permit an exemption from tax to
                                    continue for certain types of income even after the payee has otherwise
                                    become a U.S. resident alien for tax purposes.</p>
                                    <p class="_part1_text pb-10">If you are a U.S. resident alien who is relying on an exception
                                    contained in the saving clause of a tax treaty to claim an exemption
                                    from U.S. tax on certain types of income, you must attach a statement
                                    to Form W-9 that specifies the following five items.</p>
                                    <ul class="_4list">
                                        <li>1. The treaty country. Generally, this must be the same treaty under
                                        which you claimed exemption from tax as a nonresident alien.</li>
                                        <li>2. The treaty article addressing the income.</li>
                                        <li>3. The article number (or location) in the tax treaty that contains the
                                        saving clause and its exceptions.</li>
                                        <li>4. The type and amount of income that qualifies for the exemption from tax.</li>
                                        <li>5. Sufficient facts to justify the exemption from tax under the terms of the treaty article.</li>
                                    </ul>

                                    <p class="_part1_text pb-10"><strong>Criminal penalty for falsifying information.</strong> Willfully falsifying
                                    certifications or affirmations may subject you to criminal penalties
                                    including fines and/or imprisonment.</p>

                                    <p class="_part1_text pb-10"><strong>Misuse of TINs.</strong> If the requester discloses or uses TINs in violation of
                                    federal law, the requester may be subject to civil and criminal penalties.</p>

                                    <h1 class="_sign_main_title">Specific Instructions</h1>
                                    <h2 class="_sign_sub_title">Line 1</h2>

                                    <p class="_part1_text pb-10">You must enter one of the following on this line; <strong>do not</strong> leave this line
                                    blank. The name should match the name on your tax return.</p>

                                    <p class="_part1_text pb-10">If this Form W-9 is for a joint account (other than an account
                                    maintained by a foreign financial institution (FFI)), list first, and then
                                    circle, the name of the person or entity whose number you entered in
                                    Part I of Form W-9. If you are providing Form W-9 to an FFI to document
                                    a joint account, each holder of the account that is a U.S. person must
                                    provide a Form W-9.</p>

                                    <ul class="_4list pb-10">
                                        <li>a. <strong>Individual.</strong> Generally, enter the name shown on your tax return. If
                                        you have changed your last name without informing the Social Security
                                        Administration (SSA) of the name change, enter your first name, the last
                                        name as shown on your social security card, and your new last name.</li>
                                        <li><strong>Note: ITIN applicant:</strong> Enter your individual name as it was entered on
                                        your Form W-7 application, line 1a. This should also be the same as the
                                        name you entered on the Form 1040/1040A/1040EZ you filed with your
                                        application.</li>
                                        <li>b. <strong>Sole proprietor or single-member LLC.</strong> Enter your individual
                                        name as shown on your 1040/1040A/1040EZ on line 1. You may enter
                                        your business, trade, or “doing business as” (DBA) name on line 2.</li>
                                        <li>c. <strong>Partnership, LLC that is not a single-member LLC, C
                                        corporation, or S corporation.</strong> Enter the entity's name as shown on the
                                        entity's tax return on line 1 and any business, trade, or DBA name on
                                        line 2.</li>
                                        <li>d. <strong>Other entities.</strong> Enter your name as shown on required U.S. federal
                                        tax documents on line 1. This name should match the name shown on the
                                        charter or other legal document creating the entity. You may enter any
                                        business, trade, or DBA name on line 2.</li>
                                        <li>e. <strong>Disregarded entity.</strong> For U.S. federal tax purposes, an entity that is
                                        disregarded as an entity separate from its owner is treated as a
                                        “disregarded entity.” See Regulations section 301.7701-2(c)(2)(iii). Enter
                                        the owner's name on line 1. The name of the entity entered on line 1
                                        should never be a disregarded entity. The name on line 1 should be the
                                        name shown on the income tax return on which the income should be
                                        reported. For example, if a foreign LLC that is treated as a disregarded
                                        entity for U.S. federal tax purposes has a single owner that is a U.S.
                                        person, the U.S. owner's name is required to be provided on line 1. If
                                        the direct owner of the entity is also a disregarded entity, enter the first
                                        owner that is not disregarded for federal tax purposes. Enter the
                                        disregarded entity's name on line 2, “Business name/disregarded entity
                                        name.” If the owner of the disregarded entity is a foreign person, the
                                        owner must complete an appropriate Form W-8 instead of a Form W-9.
                                        This is the case even if the foreign person has a U.S. TIN. </li>
                                    </ul>

                                    <h2 class="_sign_sub_title">Line 2</h2>
                                    <p class="_part1_text pb-10">If you have a business name, trade name, DBA name, or disregarded
                                    entity name, you may enter it on line 2.</p>

                                    <h2 class="_sign_sub_title">Line 3</h2>
                                    <p class="_part1_text pb-10">Check the appropriate box on line 3 for the U.S. federal tax
                                    classification of the person whose name is entered on line 1. Check only
                                    one box on line 3.</p>

                                    <p class="_part1_text pb-15">The following chart shows types of payments that may be exempt
                                    from backup withholding. The chart applies to the exempt payees listed
                                    above, 1 through 13.</p>

                                    <table class="_2table mb-20">
                                        <tr>
                                            <th>IF the payment is for . . .</th>
                                            <th>THEN the payment is exempt for . . .</th>
                                        </tr>

                                        <tr>
                                            <td>Interest and dividend payments</td>
                                            <td>All exempt payees except for 7</td>
                                        </tr>

                                        <tr>
                                            <td>Broker transactions</td>
                                            <td>Exempt payees 1 through 4 and 6
                                            through 11 and all C corporations.
                                            S corporations must not enter an
                                            exempt payee code because they
                                            are exempt only for sales of
                                            noncovered securities acquired
                                            prior to 2012. </td>
                                        </tr>

                                        <tr>
                                            <td>Barter exchange transactions and patronage dividends</td>
                                            <td>Exempt payees 1 through 4</td>
                                        </tr>

                                        <tr>
                                            <td>Payments over $600 required to be reported and direct sales over $5,000<sup>1</sup></td>
                                            <td>Generally, exempt payees 1 through 5<sup>2</sup></td>
                                        </tr>

                                        <tr>
                                            <td>Payments made in settlement of payment card or third party network transactions </td>
                                            <td>Exempt payees 1 through 4</td>
                                        </tr>
                                    </table>

                                    <ul class="_4list pb-10">
                                        <li>1 See Form 1099-MISC, Miscellaneous Income, and its instructions.</li>
                                        <li>2 However, the following payments made to a corporation and
                                        reportable on Form 1099-MISC are not exempt from backup
                                        withholding: medical and health care payments, attorneys’ fees, gross
                                        proceeds paid to an attorney reportable under section 6045(f), and
                                        payments for services paid by a federal executive agency.</li>
                                    </ul>

                                    <p class="_part1_text pb-10"><strong>Exemption from FATCA reporting code.</strong> The following codes identify
                                    payees that are exempt from reporting under FATCA. These codes
                                    apply to persons submitting this form for accounts maintained outside
                                    of the United States by certain foreign financial institutions. Therefore, if
                                    you are only submitting this form for an account you hold in the United
                                    States, you may leave this field blank. Consult with the person
                                    requesting this form if you are uncertain if the financial institution is
                                    subject to these requirements. A requester may indicate that a code is
                                    not required by providing you with a Form W-9 with “Not Applicable” (or
                                    any similar indication) written or printed on the line for a FATCA
                                    exemption code.</p>

                                    <ul class="_4list pb-15">
                                        <li>A—An organization exempt from tax under section 501(a) or any
                                        individual retirement plan as defined in section 7701(a)(37)</li>
                                        <li>B—The United States or any of its agencies or instrumentalities</li>
                                        <li>C—A state, the District of Columbia, a U.S. commonwealth or
                                        possession, or any of their political subdivisions or instrumentalities</li>
                                        <li>D—A corporation the stock of which is regularly traded on one or
                                        more established securities markets, as described in Regulations
                                        section 1.1472-1(c)(1)(i)</li>
                                        <li>E—A corporation that is a member of the same expanded affiliated
                                        group as a corporation described in Regulations section 1.1472-1(c)(1)(i)</li>
                                        <li>F—A dealer in securities, commodities, or derivative financial
                                        instruments (including notional principal contracts, futures, forwards,
                                        and options) that is registered as such under the laws of the United
                                        States or any state</li>
                                        <li>G—A real estate investment trust</li>
                                        <li>H—A regulated investment company as defined in section 851 or an
                                        entity registered at all times during the tax year under the Investment
                                        Company Act of 1940</li>
                                        <li>I—A common trust fund as defined in section 584(a)</li>
                                        <li>J—A bank as defined in section 581</li>
                                        <li>K—A broker</li>
                                        <li>L—A trust exempt from tax under section 664 or described in section 4947(a)(1)</li>
                                        <li></li>
                                    </ul>

                                    <ul class="_4list pb-10">
                                        <li><strong>1. Interest, dividend, and barter exchange accounts opened
                                        before 1984 and broker accounts considered active during 1983.</strong>
                                        You must give your correct TIN, but you do not have to sign the
                                        certification.</li>
                                        <li><strong>2. Interest, dividend, broker, and barter exchange accounts
                                        opened after 1983 and broker accounts considered inactive during
                                        1983.</strong> You must sign the certification or backup withholding will apply. If
                                        you are subject to backup withholding and you are merely providing
                                        your correct TIN to the requester, you must cross out item 2 in the
                                        certification before signing the form.</li>
                                        <li><strong>3. Real estate transactions.</strong> You must sign the certification. You may
                                        cross out item 2 of the certification</li>
                                        <li><strong>4. Other payments.</strong> You must give your correct TIN, but you do not
                                        have to sign the certification unless you have been notified that you
                                        have previously given an incorrect TIN. “Other payments” include
                                        payments made in the course of the requester’s trade or business for
                                        rents, royalties, goods (other than bills for merchandise), medical and
                                        health care services (including payments to corporations), payments to
                                        a nonemployee for services, payments made in settlement of payment
                                        card and third party network transactions, payments to certain fishing
                                        boat crew members and fishermen, and gross proceeds paid to
                                        attorneys (including payments to corporations). </li>
                                        <li><strong>5. Mortgage interest paid by you, acquisition or abandonment of
                                        secured property, cancellation of debt, qualified tuition program
                                        payments (under section 529), ABLE accounts (under section 529A),
                                        IRA, Coverdell ESA, Archer MSA or HSA contributions or
                                        distributions, and pension distributions.</strong> You must give your correct
                                        TIN, but you do not have to sign the certification.</li>
                                    </ul>

                                    <h1 class="_sign_main_title">What Name and Number To Give the Requester</h1>

                                    <table class="_2table mb-20">
                                        <tr>
                                            <th>For this type of account:</th>
                                            <th>Give name and SSN of:</th>
                                        </tr>

                                        <tr>
                                            <td>1. Individua</td>
                                            <td>The individual</td>
                                        </tr>

                                        <tr>
                                            <td>2. Two or more individuals (joint account) other than an account maintained by an FFI</td>
                                            <td>The actual owner of the account or, if combined funds, the first individual on the account<sup>1</sup></td>
                                        </tr>

                                        <tr>
                                            <td>3. Two or more U.S. persons (joint account maintained by an FFI)</td>
                                            <td>Each holder of the account</td>
                                        </tr>

                                        <tr>
                                            <td>4. Custodial account of a minor (Uniform Gift to Minors Act)</td>
                                            <td>The minor<sup>2</sup></td>
                                        </tr>

                                        <tr>
                                            <td>5. a. The usual revocable savings trust (grantor is also trustee) b. So-called trust account that is not a legal or valid trust under state law</td>
                                            <td>The grantor-trustee<sup>1</sup> <br/> The actual owner<sup>1</sup></td>
                                        </tr>

                                        <tr>
                                            <td>6. Sole proprietorship or disregarded entity owned by an individual</td>
                                            <td>The owner<sup>3</sup></td>
                                        </tr>

                                        <tr>
                                            <td>7. Grantor trust filing under Optional Form 1099 Filing Method 1 (see Regulations section 1.671-4(b)(2)(i) (A))</td>
                                            <td>The grantor*</td>
                                        </tr>
                                    </table>

                                    <table class="_2table mb-20">
                                        <tr>
                                            <th>For this type of account:</th>
                                            <th>Give name and EIN of:</th>
                                        </tr>

                                        <tr>
                                            <td>8. Disregarded entity not owned by an individual</td>
                                            <td>The owner</td>
                                        </tr>

                                        <tr>
                                            <td>9. A valid trust, estate, or pension trust</td>
                                            <td>Legal entity<sup>4</sup></td>
                                        </tr>

                                        <tr>
                                            <td>10. Corporation or LLC electing corporate status on Form 8832 or Form 2553</td>
                                            <td>The corporation</td>
                                        </tr>

                                        <tr>
                                            <td>11. Association, club, religious, charitable, educational, or other taxexempt organization</td>
                                            <td>The organization</td>
                                        </tr>

                                        <tr>
                                            <td>12. Partnership or multi-member LLC</td>
                                            <td>The partnership</td>
                                        </tr>

                                        <tr>
                                            <td>13. A broker or registered nominee</td>
                                            <td>The broker or nominee</td>
                                        </tr>
                                    </table>

                                    <p class="_part1_text pb-10">The IRS does not initiate contacts with taxpayers via emails. Also, the
                                    IRS does not request personal detailed information through email or ask
                                    taxpayers for the PIN numbers, passwords, or similar secret access
                                    information for their credit card, bank, or other financial accounts.</p>

                                    <p class="_part1_text pb-10">If you receive an unsolicited email claiming to be from the IRS,
                                    forward this message to<a href=""><i>phishing@irs.gov</i></a>. You may also report misuse
                                    of the IRS name, logo, or other IRS property to the Treasury Inspector
                                    General for Tax Administration (TIGTA) at 1-800-366-4484. You can
                                    forward suspicious emails to the Federal Trade Commission at
                                    <a href=""><i>spam@uce.gov</i></a> or report them at <a href=""><i>www.ftc.gov/complaint</i></a>. You can
                                    contact the FTC at www.ftc.gov/idtheft or 877-IDTHEFT (877-438-4338).
                                    If you have been the victim of identity theft, see<a href=""> <i>www.IdentityTheft.gov</i></a>
                                    and Pub. 5027.</p>

                                    <p class="_part1_text pb-10">Visit <a href=""><i>www.irs.gov/IdentityTheft</i></a> to learn more about identity theft and how to reduce your risk.</p>
                                </div>

                                <div class="_sign_main_right">
                                    <ul class="_dot_list pb-10">
                                        <li>Form 1099-DIV (dividends, including those from stocks or mutual funds)</li>
                                        <li>Form 1099-MISC (various types of income, prizes, awards, or gross proceeds)</li>
                                        <li>Form 1099-B (stock or mutual fund sales and certain other transactions by brokers)</li>
                                        <li>Form 1099-S (proceeds from real estate transactions)</li>
                                        <li>Form 1099-K (merchant card and third party network transactions)</li>
                                        <li>Form 1098 (home mortgage interest), 1098-E (student loan interest), 1098-T (tuition)</li>
                                        <li>Form 1099-C (canceled debt)</li>
                                        <li>Form 1099-A (acquisition or abandonment of secured property)</li>
                                    </ul>

                                    <p class="_part1_text pb-10">Use Form W-9 only if you are a U.S. person (including a resident alien), to provide your correct TIN. </p>
                                    <p class="_part1_text pb-10"><i>If you do not return Form W-9 to the requester with a TIN, you might
                                    be subject to backup withholding</i>. See What is backup withholding,
                                    later.</p>
                                    <p class="_part1_text pb-10"><strong><i>Example.</i></strong> Article 20 of the U.S.-China income tax treaty allows an
                                    exemption from tax for scholarship income received by a Chinese
                                    student temporarily present in the United States. Under U.S. law, this
                                    student will become a resident alien for tax purposes if his or her stay in
                                    the United States exceeds 5 calendar years. However, paragraph 2 of
                                    the first Protocol to the U.S.-China treaty (dated April 30, 1984) allows
                                    the provisions of Article 20 to continue to apply even after the Chinese
                                    student becomes a resident alien of the United States. A Chinese
                                    student who qualifies for this exception (under paragraph 2 of the first
                                    protocol) and is relying on this exception to claim an exemption from tax
                                    on his or her scholarship or fellowship income would attach to Form
                                    W-9 a statement that includes the information described above to
                                    support that exemption.</p>

                                    <p class="_part1_text pb-10">If you are a nonresident alien or a foreign entity, give the requester the
                                    appropriate completed Form W-8 or Form 8233.</p>

                                    <h1 class="_sign_main_title">Backup Withholding</h1>

                                    <p class="_part1_text pb-10"><strong>What is backup withholding?</strong> Persons making certain payments to you
                                    must under certain conditions withhold and pay to the IRS 24% of such
                                    payments. This is called “backup withholding.” Payments that may be
                                    subject to backup withholding include interest, tax-exempt interest,
                                    dividends, broker and barter exchange transactions, rents, royalties,
                                    nonemployee pay, payments made in settlement of payment card and
                                    third party network transactions, and certain payments from fishing boat
                                    operators. Real estate transactions are not subject to backup
                                    withholding.</p>

                                    <p class="_part1_text pb-10">You will not be subject to backup withholding on payments you
                                    receive if you give the requester your correct TIN, make the proper
                                    certifications, and report all your taxable interest and dividends on your
                                    tax return.</p>
                                    <p class="_part1_text pb-10"><strong>Payments you receive will be subject to backup withholding if:</strong> </p>

                                    <ul class="_4list">
                                        <li>1. You do not furnish your TIN to the requester,</li>
                                        <li>2. You do not certify your TIN when required (see the instructions for Part II for details),</li>
                                        <li>3. The IRS tells the requester that you furnished an incorrect TIN,</li>
                                        <li>4. The IRS tells you that you are subject to backup withholding
                                        because you did not report all your interest and dividends on your tax
                                        return (for reportable interest and dividends only), or</li>
                                        <li>5. You do not certify to the requester that you are not subject to
                                        backup withholding under 4 above (for reportable interest and dividend
                                        accounts opened after 1983 only).</li>
                                        <li>Certain payees and payments are exempt from backup withholding.
                                        See <i>Exempt payee code</i>, later, and the separate Instructions for the
                                        Requester of Form W-9 for more information.</li>
                                        <li><i>Also see Special rules for partnerships,</i> earlier.</li>
                                    </ul>

                                    <h1 class="_sign_main_title">What is FATCA Reporting?</h1>

                                    <p class="_part1_text pb-10">The Foreign Account Tax Compliance Act (FATCA) requires a
                                    participating foreign financial institution to report all United States
                                    account holders that are specified United States persons. Certain
                                    payees are exempt from FATCA reporting. See Exemption from FATCA
                                    reporting code, later, and the Instructions for the Requester of Form
                                    W-9 for more information.</p>

                                    <h1 class="_sign_main_title">Updating Your Information</h1>
                                    <p class="_part1_text pb-10">You must provide updated information to any person to whom you
                                    claimed to be an exempt payee if you are no longer an exempt payee
                                    and anticipate receiving reportable payments in the future from this
                                    person. For example, you may need to provide updated information if
                                    you are a C corporation that elects to be an S corporation, or if you no
                                    longer are tax exempt. In addition, you must furnish a new Form W-9 if
                                    the name or TIN changes for the account; for example, if the grantor of a
                                    grantor trust dies</p>

                                    <h1 class="_sign_main_title">Penalties</h1>
                                    <p class="_part1_text pb-10"><strong>Failure to furnish TIN.</strong> If you fail to furnish your correct TIN to a
                                    requester, you are subject to a penalty of $50 for each such failure
                                    unless your failure is due to reasonable cause and not to willful neglect.</p>
                                    <p class="_part1_text pb-10"><strong>Civil penalty for false information with respect to withholding.</strong> If you
                                    make a false statement with no reasonable basis that results in no
                                    backup withholding, you are subject to a $500 penalty.</p>

                                    <table class="_2table mb-20">
                                        <tr>
                                            <th>IF the entity/person on line 1 isa(n) . . .</th>
                                            <th>THEN check the box for . . .</th>
                                        </tr>

                                        <tr>
                                            <td>
                                                <ul class="_dot_list">
                                                    <li>Corporation</li>
                                                </ul>
                                            </td>
                                            <td>Corporation</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <ul class="_dot_list">
                                                    <li>Individual</li>
                                                    <li>Sole proprietorship, or </li>
                                                    <li>Single-member limited liability
                                                    company (LLC) owned by an
                                                    individual and disregarded for U.S.
                                                    federal tax purposes.</li>
                                                </ul>
                                            </td>
                                            <td>Individual/sole proprietor or singlemember LLC</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <ul class="_dot_list">
                                                    <li>LLC treated as a partnership for
                                                    U.S. federal tax purposes, </li>
                                                    <li>LLC that has filed Form 8832 or
                                                    2553 to be taxed as a corporation,
                                                    or</li>
                                                    <li>LLC that is disregarded as an
                                                    entity separate from its owner but
                                                    the owner is another LLC that is
                                                    not disregarded for U.S. federal tax
                                                    purposes.</li>
                                                </ul>
                                            </td>
                                            <td>Limited liability company and enter
                                            the appropriate tax classification.
                                            (P= Partnership; C= C corporation;
                                            or S= S corporation)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <ul class="_dot_list">
                                                    <li>Partnership</li>
                                                </ul>
                                            </td>
                                            <td>Partnership</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <ul class="_dot_list">
                                                    <li>Trust/estate</li>
                                                </ul>
                                            </td>
                                            <td>Trust/estate</td>
                                        </tr>
                                    </table>
                                    
                                    <h2 class="_sign_sub_title">Line 4, Exemptions</h2>
                                    <p class="_part1_text pb-10">If you are exempt from backup withholding and/or FATCA reporting,
                                    enter in the appropriate space on line 4 any code(s) that may apply to
                                    you.</p>

                                    <p class="_part1_text pb-10"><strong>Exempt payee code.</strong></p>
                                    <ul class="_dot_list">
                                        <li>Generally, individuals (including sole proprietors) are not exempt from backup withholding.</li>
                                        <li>Except as provided below, corporations are exempt from backup
                                        withholding for certain payments, including interest and dividends.</li>
                                        <li>Corporations are not exempt from backup withholding for payments
                                        made in settlement of payment card or third party network transactions.</li>
                                        <li>Corporations are not exempt from backup withholding with respect to
                                        attorneys’ fees or gross proceeds paid to attorneys, and corporations
                                        that provide medical or health care services are not exempt with respect
                                        to payments reportable on Form 1099-MISC.</li>
                                    </ul>

                                    <p class="_part1_text pb-10">The following codes identify payees that are exempt from backup
                                    withholding. Enter the appropriate code in the space in line 4.</p>

                                    <ul class="_4list">
                                        <li>1—An organization exempt from tax under section 501(a), any IRA, or
                                        a custodial account under section 403(b)(7) if the account satisfies the
                                        requirements of section 401(f)(2)</li>
                                        <li>2—The United States or any of its agencies or instrumentalities</li>
                                        <li>3—A state, the District of Columbia, a U.S. commonwealth or
                                        possession, or any of their political subdivisions or instrumentalities</li>
                                        <li>4—A foreign government or any of its political subdivisions, agencies,
                                        or instrumentalities </li>
                                        <li>5—A corporation</li>
                                        <li>6—A dealer in securities or commodities required to register in the
                                        United States, the District of Columbia, or a U.S. commonwealth or
                                        possession </li>
                                        <li>7—A futures commission merchant registered with the Commodity
                                        Futures Trading Commission</li>
                                        <li>8—A real estate investment trust</li>
                                        <li>9—An entity registered at all times during the tax year under the
                                        Investment Company Act of 1940</li>
                                        <li>10—A common trust fund operated by a bank under section 584(a)</li>
                                        <li>11—A financial institution</li>
                                        <li>12—A middleman known in the investment community as a nominee or
                                        custodian</li>
                                        <li>13—A trust exempt from tax under section 664 or described in section 4947</li>
                                        <li>M—A tax exempt trust under a section 403(b) plan or section 457(g) plan</li>
                                    </ul>

                                    <p class="_part1_text pb-10"><strong>Note:</strong> You may wish to consult with the financial institution requesting
                                    this form to determine whether the FATCA code and/or exempt payee
                                    code should be completed.</p>

                                    <h2 class="_sign_sub_title">Line 5</h2>
                                    <p class="_part1_text pb-10">Enter your address (number, street, and apartment or suite number).
                                    This is where the requester of this Form W-9 will mail your information
                                    returns. If this address differs from the one the requester already has on
                                    file, write NEW at the top. If a new address is provided, there is still a
                                    chance the old address will be used until the payor changes your
                                    address in their records.</p>

                                    <h2 class="_sign_sub_title">Line 6</h2>
                                    <p class="_part1_text pb-10">Enter your city, state, and ZIP code.</p>
                                    <h1 class="_sign_main_title">Part I. Taxpayer Identification Number (TIN)</h1>

                                    <p class="_part1_text pb-10"><strong>Enter your TIN in the appropriate box.</strong> If you are a resident alien and
                                    you do not have and are not eligible to get an SSN, your TIN is your IRS
                                    individual taxpayer identification number (ITIN). Enter it in the social
                                    security number box. If you do not have an ITIN, see How to get a TIN
                                    below.</p>

                                    <ul class="_4list">
                                        <li>If you are a sole proprietor and you have an EIN, you may enter either
                                        your SSN or EIN.</li>
                                        <li>If you are a single-member LLC that is disregarded as an entity
                                        separate from its owner, enter the owner’s SSN (or EIN, if the owner has
                                        one). Do not enter the disregarded entity’s EIN. If the LLC is classified as
                                        a corporation or partnership, enter the entity’s EIN.</li>
                                    </ul>

                                    <p class="_part1_text pb-10"><strong>Note:</strong> <i>See What Name and Number To Give the Requester,</i> later, for
                                    further clarification of name and TIN combinations.</p>

                                    <p class="_part1_text pb-10"><strong>How to get a TIN.</strong> If you do not have a TIN, apply for one immediately.
                                    To apply for an SSN, get Form SS-5, Application for a Social Security
                                    Card, from your local SSA office or get this form online at
                                    <a href=""><i>www.SSA.gov</i></a>. You may also get this form by calling 1-800-772-1213.
                                    Use Form W-7, Application for IRS Individual Taxpayer Identification
                                    Number, to apply for an ITIN, or Form SS-4, Application for Employer
                                    Identification Number, to apply for an EIN. You can apply for an EIN
                                    online by accessing the IRS website at <a href=""><i>www.irs.gov/Businesses</i></a> and
                                    clicking on Employer Identification Number (EIN) under Starting a
                                    Business. Go to <a href=""><i>www.irs.gov/Forms</i></a> to view, download, or print Form
                                    W-7 and/or Form SS-4. Or, you can go to <a href=""><i>www.irs.gov/OrderForms</i></a> to
                                    place an order and have Form W-7 and/or SS-4 mailed to you within 10
                                    business days.</p>

                                    <p class="_part1_text pb-10">If you are asked to complete Form W-9 but do not have a TIN, apply
                                    for a TIN and write “Applied For” in the space for the TIN, sign and date
                                    the form, and give it to the requester. For interest and dividend
                                    payments, and certain payments made with respect to readily tradable
                                    instruments, generally you will have 60 days to get a TIN and give it to
                                    the requester before you are subject to backup withholding on
                                    payments. The 60-day rule does not apply to other types of payments.
                                    You will be subject to backup withholding on all such payments until
                                    you provide your TIN to the requester.</p>

                                    <p class="_part1_text pb-10"><strong>Note:</strong> Entering “Applied For” means that you have already applied for a
                                    TIN or that you intend to apply for one soon.</p>

                                    <p><strong>Caution:</strong> A disregarded U.S. entity that has a foreign owner must use
                                    the appropriate Form W-8.</p>
                                    <h1 class="_sign_main_title">Part II. Certification</h1>
                                    <p class="_part1_text pb-10">To establish to the withholding agent that you are a U.S. person, or
                                    resident alien, sign Form W-9. You may be requested to sign by the
                                    withholding agent even if item 1, 4, or 5 below indicates otherwise.</p>
                                    <p class="_part1_text pb-10">For a joint account, only the person whose TIN is shown in Part I
                                    should sign (when required). In the case of a disregarded entity, the
                                    person identified on line 1 must sign. Exempt payees, see Exempt payee
                                    code, earlier.</p>
                                    <p class="_part1_text pb-10"><strong>Signature requirements.</strong> Complete the certification as indicated in
                                    items 1 through 5 below</p>

                                    <table class="_2table mb-20">
                                        <tr>
                                            <th>For this type of account:</th>
                                            <th>Give name and EIN of:</th>
                                        </tr>

                                        <tr>
                                            <td>14. Account with the Department of
                                            Agriculture in the name of a public
                                            entity (such as a state or local
                                            government, school district, or
                                            prison) that receives agricultural
                                            program payments</td>
                                            <td>The public entity</td>
                                            
                                        </tr>

                                        <tr>
                                            <td>15. Grantor trust filing under the Form
                                            1041 Filing Method or the Optional
                                            Form 1099 Filing Method 2 (see
                                            Regulations section 1.671-4(b)(2)(i)(B))</td>
                                            <td>The trust</td>
                                        </tr>
                                    </table>

                                    <ul class="_4list">
                                        <li>1 List first and circle the name of the person whose number you furnish.
                                        If only one person on a joint account has an SSN, that person’s number
                                        must be furnished.</li>
                                        <li>2 Circle the minor’s name and furnish the minor’s SSN.</li>
                                        <li>3 You must show your individual name and you may also enter your
                                        business or DBA name on the “Business name/disregarded entity”
                                        name line. You may use either your SSN or EIN (if you have one), but the
                                        IRS encourages you to use your SSN.</li>
                                        <li>4 List first and circle the name of the trust, estate, or pension trust. (Do
                                        not furnish the TIN of the personal representative or trustee unless the
                                        legal entity itself is not designated in the account title.) Also see Special
                                        rules for partnerships, earlier.</li>
                                    </ul>

                                    <p class="_part1_text pb-10"><strong>*Note :</strong> The grantor also must provide a Form W-9 to trustee of trust.</p>
                                    <p class="_part1_text pb-10"><strong>Note :</strong> Note: If no name is circled when more than one name is listed, the
                                    number will be considered to be that of the first name listed.</p>

                                    <h1 class="_sign_main_title">Secure Your Tax Records From Identity Theft</h1>
                                    <p class="_part1_text pb-10">Identity theft occurs when someone uses your personal information
                                    such as your name, SSN, or other identifying information, without your
                                    permission, to commit fraud or other crimes. An identity thief may use
                                    your SSN to get a job or may file a tax return using your SSN to receive
                                    a refund.</p>

                                    <p class="_part1_text pb-10">To reduce your risk:</p>

                                    <ul class="_dot_list">
                                        <li>Protect your SSN,</li>
                                        <li>Ensure your employer is protecting your SSN, and</li>
                                        <li>Be careful when choosing a tax preparer.</li>
                                    </ul>

                                    <ul class="_4list">
                                        <li>If your tax records are affected by identity theft and you receive a
                                        notice from the IRS, respond right away to the name and phone number
                                        printed on the IRS notice or letter.</li>

                                        <li>If your tax records are not currently affected by identity theft but you
                                        think you are at risk due to a lost or stolen purse or wallet, questionable
                                        credit card activity or credit report, contact the IRS Identity Theft Hotline
                                        at 1-800-908-4490 or submit Form 14039.</li>

                                        <li>For more information, see Pub. 5027, Identity Theft Information for Taxpayers.</li>

                                        <li>Victims of identity theft who are experiencing economic harm or a
                                        systemic problem, or are seeking help in resolving tax problems that
                                        have not been resolved through normal channels, may be eligible for
                                        Taxpayer Advocate Service (TAS) assistance. You can reach TAS by
                                        calling the TAS toll-free case intake line at 1-877-777-4778 or TTY/TDD
                                        1-800-829-4059.</li>
                                    </ul>

                                    <p class="_part1_text pb-10"><strong>Protect yourself from suspicious emails or phishing schemes.</strong>
                                    Phishing is the creation and use of email and websites designed to
                                    mimic legitimate business emails and websites. The most common act
                                    is sending an email to a user falsely claiming to be an established
                                    legitimate enterprise in an attempt to scam the user into surrendering
                                    private information that will be used for identity theft.</p>

                                    <h1 class="_sign_main_title">Privacy Act Notice</h1>
                                    <p class="_part1_text pb-10">Section 6109 of the Internal Revenue Code requires you to provide your
                                    correct TIN to persons (including federal agencies) who are required to
                                    file information returns with the IRS to report interest, dividends, or
                                    certain other income paid to you; mortgage interest you paid; the
                                    acquisition or abandonment of secured property; the cancellation of
                                    debt; or contributions you made to an IRA, Archer MSA, or HSA. The
                                    person collecting this form uses the information on the form to file
                                    information returns with the IRS, reporting the above information.
                                    Routine uses of this information include giving it to the Department of
                                    Justice for civil and criminal litigation and to cities, states, the District of
                                    Columbia, and U.S. commonwealths and possessions for use in
                                    administering their laws. The information also may be disclosed to other
                                    countries under a treaty, to federal and state agencies to enforce civil
                                    and criminal laws, or to federal law enforcement and intelligence
                                    agencies to combat terrorism. You must provide your TIN whether or
                                    not you are required to file a tax return. Under section 3406, payers
                                    must generally withhold a percentage of taxable interest, dividend, and
                                    certain other payments to a payee who does not give a TIN to the payer.
                                    Certain penalties may also apply for providing false or fraudulent
                                    information.</p>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <div class="row">
                        <form ref="form" method="post" @submit.prevent="storeDiposte">
                            <div class="col-xs-12 col-sm-12 col-md-12 pb-20 pb-10 pt-20">
                                <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
                                <Alert v-if="isVerify" type="error" >Please verify that you are not a robot!</Alert>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <!-- <Button  type="primary" @click="storeDiposte">Submit</Button> -->
                                <button type="submit" class="ivu-btn ivu-btn-primary" >Submit Form</button>
                                <!-- <Button type="primary" class="ml-10">Print Form</Button> -->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isVerify:false,
            formValu:{
                value1:'',
                value2:'',
                value3:'',
                value4:'',
                value5:'',
                value6:'',
                value7:'',
                value8:'',
                value9:'',
                value10:'',
                value11:'',
                value12:'',
                value13:'',
                value14:'',
                value15:'',
                value16:'',
                value17:'',
                value18:'',
            },
            form:{
                name:'',
                businessName:'',
                businessType:'',
                businessValue:'',
                exemptionsPayeeCode:'',
                exemptionsReportingCode:'',
                address:'',
                requesterAddress:'',
                stateCityZip:'',
                listAccountNumber:'',
                socialSecurityNumber:'',
                employerIndentificationNumber:'',
            },
             errorData:{
                name:'',
                businessName:'',
                businessType:'',
                businessValue:'',
                exemptionsPayeeCode:'',
                exemptionsReportingCode:'',
                address:'',
                requesterAddress:'',
                stateCityZip:'',
                listAccountNumber:'',
                socialSecurityNumber:'',
                employerIndentificationNumber:'',
            }
        }
    },
    methods:{
        formateInput(l){
        //   let a =  Number.isInteger(this.formValu["value"+l])
        //   console.log(a)
        //   this.i(a)
        //   if(a){

        //   }
        //   else{
        //       this.$set(this.formValu,"value"+l,'') 
        //     //   this.i(this.formValu["value"+l])
        //       console.log(this.formValu["value"+l] , "kdjalk")
        //       console.log(this.formValu)
        //       this.formValu["value"+l] = ''
        //   }
            

            // this.$set()
            // let value1 = 5
            // let a = this.formValu["value"+l]
            
            // this.$set(this.formValu,"value"+l,5) 
            // this.formValu["value"+l] = 5
            // this.i("ldk")
        //  this.formValu.value1 =   /[^0-9]/g,''
        },
         onError(error) {
            console.log('Error happened:', error)
        },
        onSuccess(token) {
            console.log('Succeeded:', token)
            // here you submit the form
            //   this.$refs.form.submit()
        },
        onExpired() {
            console.log('Expired')
        },
         
          clearData() {
            this.form={
                name:'',
                businessName:'',
                businessType:'',
                businessValue:'',
                exemptionsPayeeCode:'',
                exemptionsReportingCode:'',
                address:'',
                requesterAddress:'',
                stateCityZip:'',
                listAccountNumber:'',
                socialSecurityNumber:'',
                employerIndentificationNumber:'',
            }
        },
        clearError() {
            this.errorData={
                name:'',
                businessName:'',
                businessType:'',
                businessValue:'',
                exemptionsPayeeCode:'',
                exemptionsReportingCode:'',
                address:'',
                requesterAddress:'',
                stateCityZip:'',
                listAccountNumber:'',
                socialSecurityNumber:'',
                employerIndentificationNumber:'',
            }
        },

         checkFormValidation() {
            this.clearError();
            let check = true;
            if (this.form.name.trim() == "" || this.form.name == null ) {
                this.errorData.name = "This field is required!";
                check = false;
            }
            if (this.form.businessName.trim() == "" || this.form.businessName == null ) {
                this.errorData.businessName = "This field is required!";
                check = false;
            }
            if (this.form.businessType.trim() == "" || this.form.businessType == null ) {
                this.errorData.businessType = "This field is required!";
                check = false;
            }
            if(this.form.businessType){
                if(this.form.businessType=='Classification' || this.form.businessType=='Other'){
                     if (this.form.businessValue.trim() == "" || this.form.businessValue == null ) {
                        this.errorData.businessType = "This field is required!";
                        check = false;
                    }
                }
                
            }
            if (this.form.exemptionsPayeeCode.trim() == "" || this.form.exemptionsPayeeCode == null ) {
                this.errorData.exemptionsPayeeCode = "This field is required!";
                check = false;
            }
         
            if (this.form.exemptionsReportingCode.trim() == "" || this.form.exemptionsReportingCode == null ) {
                this.errorData.exemptionsReportingCode = "This field is required!";
                check = false;
            }
            if (this.form.address.trim() == "" || this.form.address == null ) {
                this.errorData.address = "This field is required!";
                check = false;
            }
            
            if (this.form.requesterAddress.trim() == "" || this.form.requesterAddress == null ) {
                this.errorData.requesterAddress = "This field is required!";
                check = false;
            }
            if (this.form.stateCityZip.trim() == "" || this.form.stateCityZip == null ) {
                this.errorData.stateCityZip = "This field is required!";
                check = false;
            }
            if (this.form.listAccountNumber.trim() == "" || this.form.listAccountNumber == null ) {
                this.errorData.listAccountNumber = "This field is required!";
                check = false;
            }
            let check1 = this.checkFormValidationSocialSecurityNumber()
            if(!check1){
                this.errorData.socialSecurityNumber = "This field is required!";
                check = false;
            }
            let check2 = this.checkFormValidationEmployerIndentificationNumber()
            if(!check2){
                this.errorData.employerIndentificationNumber = "This field is required!";
                check = false;
            }



            return check;
        },
        checkFormValidationSocialSecurityNumber(){
            let SocialSecurityNumber = this.formValu.value1 + this.formValu.value2 + this.formValu.value3 + this.formValu.value4 + this.formValu.value5 + this.formValu.value6 + this.formValu.value7 + this.formValu.value8+this.formValu.value9
            let siz = SocialSecurityNumber.length
            if(siz<=8){
                return false
            }
            return true
       },
        checkFormValidationEmployerIndentificationNumber(){
            let employerIndentificationNumber = this.formValu.value10 + this.formValu.value11 + this.formValu.value12 + this.formValu.value13 + this.formValu.value14 + this.formValu.value15 + this.formValu.value16 + this.formValu.value17+this.formValu.value18
            let siz = employerIndentificationNumber.length
            if(siz<=8){
                return false
            }
            return true
       },

        async storeDiposte(){
            let isOk = this.checkFormValidation()
            if(!isOk) return
            let token = null;
             try {
                token = await this.$recaptcha.getResponse()
                console.log('ReCaptcha token:', token)
                 this.isVerify = false
            } catch (error) {
                console.log('Login error:')
                console.log('Login error:', error)
                this.isVerify = true
                return
            }
            this.form.token =token
            const res = await this.callApi('post','/sales/createRequestForTexpayer', this.form)
            if(res.status==200){
                this.s("New Request For Texpayer form has been submited!!")
                this.clearError();
                this.clearData();
                // await this.$recaptcha.reset()
            }
            else if (res.status == 401) {
                this.e(res.data.message);
            } 
            else if (res.status == 403) {
                this.e(res.data.message);
            } 
            else this.swr()
            
        },
        

        
   
   
   }




}
</script>
<style >
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
._hei100{
    height: 100%;
}
._form_body{
    min-height: 100%;
}
</style>