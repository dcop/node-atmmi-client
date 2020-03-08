/**
 * @jest-environment node
 */

import axios from 'axios';

import { AtmClient } from "./AtmClient";
import { ToWaitingMessages } from "../domain/adapters/toWaitingMessages";

jest.setTimeout(10000);
jest.mock("axios");

describe("Atm mi client", () => {
  const stopId = 12902;

  let client: AtmClient;
  let adapter: ToWaitingMessages;

  xit("should call proper url", async () => {
    const url: string = "http://random.url/something.dunno";
    client = new AtmClient(url, null);
    await client.waitingMessagesFor(stopId);

    expect(axios.post).toHaveBeenCalledWith({ url })
  });

  xit('should call the adapter on successful response', async () => {
    adapter = jest.fn()
    client = new AtmClient(null, adapter);
    await client.waitingMessagesFor(stopId);

    expect(adapter).toHaveBeenCalled();
  });
});