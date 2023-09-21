import {
  Approval as ApprovalEvent,
  MinTokensBeforeSwapUpdated as MinTokensBeforeSwapUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SwapAndLiquify as SwapAndLiquifyEvent,
  SwapAndLiquifyEnabledUpdated as SwapAndLiquifyEnabledUpdatedEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  MinTokensBeforeSwapUpdated,
  OwnershipTransferred,
  SwapAndLiquify,
  SwapAndLiquifyEnabledUpdated,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinTokensBeforeSwapUpdated(
  event: MinTokensBeforeSwapUpdatedEvent
): void {
  let entity = new MinTokensBeforeSwapUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minTokensBeforeSwap = event.params.minTokensBeforeSwap

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwapAndLiquify(event: SwapAndLiquifyEvent): void {
  let entity = new SwapAndLiquify(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokensSwapped = event.params.tokensSwapped
  entity.ethReceived = event.params.ethReceived
  entity.tokensIntoLiqudity = event.params.tokensIntoLiqudity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwapAndLiquifyEnabledUpdated(
  event: SwapAndLiquifyEnabledUpdatedEvent
): void {
  let entity = new SwapAndLiquifyEnabledUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.enabled = event.params.enabled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
