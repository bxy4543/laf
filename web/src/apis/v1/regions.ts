// @ts-ignore
/* eslint-disable */
///////////////////////////////////////////////////////////////////////
//                                                                   //
// this file is autogenerated by service-generate                    //
// do not edit this file manually                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
/// <reference path = "api-auto.d.ts" />
import request from "@/utils/request";
import useGlobalStore from "@/pages/globalStore";

/**
 * Get region list
 */
export async function RegionControllerGetRegions(
  params: Paths.RegionControllerGetRegions.BodyParameters | any,
): Promise<Paths.RegionControllerGetRegions.Responses> {
  // /v1/regions
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/regions`, {
    method: "GET",
    params: params,
  });
}
