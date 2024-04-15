import {IRequirement} from "../../models/announcement";

export class EnvService {
  // The values that are defined here are the default values overridden by env.js

  public API_DBU: string = '';
  public API_CAJA: string = '';
  public GOOGLE_RECAPTCHA_SITEKEY: string = '';

  public SECTIONS_REQUIREMENTS_ONE: IRequirement[] = [];
  public SECTIONS_REQUIREMENTS_TWO: IRequirement[] = [];
  public SECTIONS_REQUIREMENTS_THREE: IRequirement[] = [];
  public SECTIONS_REQUIREMENTS_FOURTH: IRequirement[] = [];
  public SECTIONS_REQUIREMENTS_FIVE: IRequirement[] = [];
  public SECTIONS_REQUIREMENTS_SIX: IRequirement[] = [];
  public SECTIONS_REQUIREMENTS_SEVEN: IRequirement[] = [];

  public enableDebug = true;

  constructor() {
  }
}
